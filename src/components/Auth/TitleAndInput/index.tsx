import React, { useState } from "react";
import { IPropsTitleAndInput } from "@/types/auth";
import * as S from "./style";
import theme from "@/styles/theme";

const TitleAndInput = (props: IPropsTitleAndInput) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <>
      <S.TitleWrapper>
        <S.Title>{props.title}</S.Title>
        {props.children}
      </S.TitleWrapper>
      <S.Input
        placeholder={props.placeholder}
        placeholderTextColor={theme.colors.place_holder}
        $focus={isFocus}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChangeText={props.onChangeText}
        value={props.value}
        secureTextEntry={props.secure}
        keyboardType={props.keyboardType || "default"}
      />
    </>
  );
};

export default TitleAndInput;
