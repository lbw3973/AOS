import React, { useEffect, useState } from "react";
import * as S from "./style";
import { IPropsTitleWithConfirmInput } from "@/types/auth";
import theme from "@/styles/theme";
import { Alert, Text } from "react-native";
import OMGText from "@/components/Common/OMGText";
import { useStartTimerStore } from "@/stores/useStartTimerStore";

const TitleWithConfirmInput = (props: IPropsTitleWithConfirmInput) => {
  const [isFocus, setIsFocus] = useState(false);

  const handlePressConfirm = () => {
    if (props.onPress) {
      if (props.hasTimer && timeLeft > 0) {
        Alert.alert("인증완료");
        props.onPress();
      } else if (props.hasTimer && timeLeft === 0) {
        Alert.alert("시간초과");
      } else {
        Alert.alert("버튼 클릭");
        props.onPress();
      }
    }
    // 후처리
  };

  const [timeLeft, setTimeLeft] = useState(20);
  const { isTimerRunning } = useStartTimerStore();

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (isTimerRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      Alert.alert("타임아웃");
    }

    return () => {
      clearInterval(timerId);
    };
  }, [timeLeft, isTimerRunning]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      <S.TitleWrapper>
        <S.Title>{props.title}</S.Title>
        {props.children}
      </S.TitleWrapper>
      <S.InputWithButton $focus={isFocus}>
        <S.InputInView
          placeholder={props.placeholder}
          placeholderTextColor={theme.colors.place_holder}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChangeText={props.onChangeText}
          value={props.value}
          secureTextEntry={props.secure}
          keyboardType={props.keyboardType || "default"}
        />
        {props.hasTimer && (
          <OMGText style={{ fontWeight: 800, color: "#d24040" }}>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </OMGText>
        )}
        <S.ButtonConfirm onPress={handlePressConfirm}>
          <Text style={{ fontWeight: "800", color: "#fff" }}>{props.buttonText}</Text>
        </S.ButtonConfirm>
      </S.InputWithButton>
    </>
  );
};

export default TitleWithConfirmInput;
