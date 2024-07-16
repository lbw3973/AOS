import { emailSendCodeSchema, findPasswordSchema } from "@/utils/Yup_Schema";
import { Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import { Animated, Text, View } from "react-native";
import TitleWithInput from "@/components/Auth/TitleWithInput";
import { useAppNavigation } from "@/navigation/Navigation";
import TitleWithConfirmInput from "@/components/Auth/TItleWithConfirmInput";
import { useStartTimerStore } from "@/stores/useStartTimerStore";

const FindPassword = () => {
  const [isFocus, setIsFocus] = useState({
    email: false,
    code: false,
  });

  const navigation = useAppNavigation();
  const { setIsTimerRunning, resetIsTimerRunning } = useStartTimerStore();

  useEffect(() => {
    resetIsTimerRunning();
  }, []);

  const translateXAnim = useRef(new Animated.Value(500)).current;

  const start_fadeAnim = () => {
    Animated.spring(translateXAnim, {
      toValue: 0,
      useNativeDriver: true,
      isInteraction: true,
    }).start();
  };

  const handleSendEmail = () => {
    setIsTimerRunning();
  };

  const handleCheckCode = () => {
    // 인증 코드 확인해서 맞으면
    start_fadeAnim();
  };

  const handleChangePassword = (value: { password: string; duplication: string }) => {
    console.log(value);
    navigation.navigate("Login");
  };

  return (
    <S.Container>
      {/* 이메일 인증 */}
      <Formik
        initialValues={{ email: "", code: "" }}
        validationSchema={emailSendCodeSchema}
        onSubmit={handleCheckCode}
        validateOnMount={true}
      >
        {({ handleChange, handleSubmit, values, errors, touched, isValid }) => (
          <>
            <S.InputWrapper>
              <TitleWithConfirmInput
                title="이메일"
                placeholder="이메일을 입력해주세요."
                buttonText="인증"
                value={values.email}
                onChangeText={handleChange("email")}
                onPress={handleSendEmail}
              >
                {touched.email && errors.email && <S.TextError>* {errors.email}</S.TextError>}
              </TitleWithConfirmInput>
            </S.InputWrapper>
            <S.InputWrapper>
              <TitleWithConfirmInput
                title="인증코드"
                placeholder="인증코드를 입력해주세요."
                buttonText="인증 확인"
                value={values.code}
                onChangeText={handleChange("code")}
                onPress={handleSubmit}
                hasTimer
              >
                {touched.code && errors.code && <S.TextError>* {errors.code}</S.TextError>}
              </TitleWithConfirmInput>
            </S.InputWrapper>
          </>
        )}
      </Formik>

      {/* 비밀번호 변경 */}
      <Formik
        initialValues={{ password: "", duplication: "" }}
        validationSchema={findPasswordSchema}
        onSubmit={handleChangePassword}
        validateOnMount={true}
      >
        {({ handleChange, handleSubmit, values, errors, touched, isValid }) => (
          <Animated.View style={{ transform: [{ translateY: translateXAnim }] }}>
            <S.SubTitle>비밀번호 재설정</S.SubTitle>
            <View style={{ marginBottom: 20 }}>
              <TitleWithInput
                title="비밀번호"
                placeholder="새 비밀번호를 입력해주세요"
                value={values.password}
                onChangeText={handleChange("password")}
                secure
              >
                {touched.password && errors.password && <S.TextError>* {errors.password}</S.TextError>}
              </TitleWithInput>
            </View>
            <View style={{ marginBottom: 20 }}>
              <TitleWithInput
                title="비밀번호 확인"
                placeholder="새 비밀번호를 다시 입력해주세요"
                value={values.duplication}
                onChangeText={handleChange("duplication")}
                secure
              >
                {touched.duplication && errors.duplication && <S.TextError>* {errors.duplication}</S.TextError>}
              </TitleWithInput>
            </View>
            <S.ButtonSubmit onPress={() => handleSubmit()} disabled={!isValid} $isValid={isValid}>
              <Text style={{ color: "#fff", fontWeight: "800", fontSize: 20 }}>비밀번호 변경</Text>
            </S.ButtonSubmit>
          </Animated.View>
        )}
      </Formik>
    </S.Container>
  );
};

export default FindPassword;
