import React from "react";
import { Stack } from "@/navigation/Navigation";
import { RFValue } from "react-native-responsive-fontsize";
import Header from "@/components/Header";
import Intro from "./Intro";
import Login from "./Login";
import SignUp from "./SignUp";
import Inquire from "./Inquire";
import FindPassword from "./FindPassword";
import InputUserInfo from "./InputUserInfo";

export interface IAuthPathName {
  Intro: undefined;
  Login: undefined;
  SignUp: undefined;
  Inquire: undefined;
  FindPassword: undefined;
  InputUserInfo: undefined;
}

const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "PretendardVariable",
          fontWeight: "800",
          // fontSize: RFValue(20, 800),
        },
        // header: props => Header(props),
        // animation: "fade",
      }}
    >
      <Stack.Screen name="Intro" component={Intro} options={{ headerTitle: "LOGIN" }} />
      <Stack.Screen name="Login" component={Login} options={{ headerTitle: "이메일 로그인" }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerTitle: "이메일 회원가입" }} />
      <Stack.Screen name="Inquire" component={Inquire} options={{ headerTitle: "1:1 문의" }} />
      <Stack.Screen name="FindPassword" component={FindPassword} options={{ headerTitle: "비밀번호 찾기" }} />
      <Stack.Screen name="InputUserInfo" component={InputUserInfo} options={{ headerTitle: "사용자 정보 입력" }} />
    </Stack.Navigator>
  );
};

export default Auth;
