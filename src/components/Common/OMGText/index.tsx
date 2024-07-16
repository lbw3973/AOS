import React from "react";
import * as S from "./style";
import { TextProps } from "react-native";

interface ICustomTextProps extends TextProps {}

const OMGText: React.FC<ICustomTextProps> = ({ style, ...rest }) => {
  return <S.CustomText style={style} {...rest} allowFontScaling={false} />;
};

export default OMGText;
