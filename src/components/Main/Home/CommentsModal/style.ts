import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

export const Container = styled.View`
  border-radius: 20px 20px 0 0;
  background-color: #fff;
  flex: 1;
  width: ${width > 720 ? 720 : width}px;
  margin-top: 20px;
`;

export const SlideBar = styled.View`
  background-color: #aaa;
  border-radius: 25px;
  height: 5px;
  width: ${width > 720 ? 240 : width / 3}px;
  margin: 0 auto 32px;
`;

export const ContentsContainer = styled.View`
  padding: 8px 12px;
`;

export const PostHeader = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 50px;
`;

export const UserDateWrapper = styled.View`
  flex: 1;
`;
export const CountsContainer = styled.View`
  margin: 12px 0;
  flex-direction: row;
  gap: 20px;
`;

export const CountsWrapper = styled.TouchableOpacity`
  flex-direction: row;
  gap: 12px;
`;

export const ContentsWrapper = styled.View``;

export const HashTagWrapper = styled.View`
  margin: 16px 0 20px;
`;

export const Devider = styled.View`
  background-color: #ececec;
  height: 1px;
`;

export const CommentsContainer = styled.FlatList``;
