import { Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import * as S from "./style";
import CheckBox from "@react-native-community/checkbox";
import { Formik } from "formik";
import TitleWithInput from "@/components/Auth/TitleWithInput";
import { signUpSchema } from "@/utils/Yup_Schema";
import theme from "@/styles/theme";
import TitleWithConfirmInput from "@/components/Auth/TItleWithConfirmInput";
import { RFValue } from "react-native-responsive-fontsize";

const SignUp = () => {
  const [isFocus, setIsFocus] = useState({
    email: false,
    code: false,
  });

  const handleSendEmail = () => {};

  const handleCheckCode = () => {};

  const handleSignUp = () => {};

  return (
    <Formik
      initialValues={{ email: "", code: "", password: "", duplication: "", isChecked: false }}
      validationSchema={signUpSchema}
      onSubmit={value => console.log(value)}
      validateOnMount={true}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue, isValid }) => (
        <S.Container>
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
              onPress={handleCheckCode}
            >
              {touched.code && errors.code && <S.TextError>* {errors.code}</S.TextError>}
            </TitleWithConfirmInput>
          </S.InputWrapper>
          <S.InputWrapper>
            <TitleWithInput
              title="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              value={values.password}
              onChangeText={handleChange("password")}
              secure
            >
              {touched.password && errors.password && <S.TextError>* {errors.password}</S.TextError>}
            </TitleWithInput>
          </S.InputWrapper>
          <S.InputWrapper>
            <TitleWithInput
              title="비밀번호 확인"
              placeholder="비밀번호를 다시 입력해주세요."
              value={values.duplication}
              onChangeText={handleChange("duplication")}
              secure
            >
              {touched.duplication && errors.duplication && <S.TextError>* {errors.duplication}</S.TextError>}
            </TitleWithInput>
          </S.InputWrapper>
          <S.ProvisionWrapper>
            <CheckBox
              value={values.isChecked}
              onValueChange={value => setFieldValue("isChecked", value)}
              tintColors={{ true: "#5667ff", false: "#5667ff" }}
            />
            <Text style={{ color: "#000", fontSize: RFValue(16, 800), fontWeight: "800" }}>
              [필수] 개인정보 처리 방침
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "#000", fontSize: RFValue(16, 800), fontWeight: "800" }}>[보기]</Text>
            </TouchableOpacity>
          </S.ProvisionWrapper>
          {touched.isChecked && errors.isChecked && <S.TextError>* {errors.isChecked}</S.TextError>}
          <S.ButtonSubmit onPress={() => handleSubmit()} disabled={!isValid} $isValid={isValid}>
            <Text style={{ color: "#fff", fontWeight: "800", fontSize: 20 }}>회원가입</Text>
          </S.ButtonSubmit>
        </S.Container>
      )}
    </Formik>
  );
};

export default SignUp;
