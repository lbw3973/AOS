import React from "react";
import { Stack } from "@/navigation/Navigation";
import Intro from "./Intro";
import Login from "./Login";
import SignUp from "./SignUp";
import Inquire from "./Inquire";
import FindPassword from "./FindPassword";

const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: "PretendardVariable", fontWeight: "800" },
      }}
    >
      <Stack.Screen name="Intro" component={Intro} options={{ headerTitle: "LOGIN" }} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Inquire" component={Inquire} options={{ headerTitle: "1:1 문의" }} />
      <Stack.Screen name="FindPassword" component={FindPassword} options={{ headerTitle: "비밀번호 찾기" }} />
    </Stack.Navigator>
  );
};

export default Auth;
