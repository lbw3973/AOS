import Swiper from "react-native-swiper";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 20px 0;
  border-color: #bdbdbd;
  border-bottom-width: 1px;
`;

export const PostHeader = styled.View`
  margin: 0 12px;
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

export const ImageSwiper = styled(Swiper)<{ $height: number }>`
  margin: 8px 0 12px;
  height: ${({ $height }) => $height}px;
  max-height: 720px;
  background-color: #ececec;
  align-items: center;
`;

export const CountsContainer = styled.View`
  margin: 12px;
  flex-direction: row;
  gap: 20px;
`;

export const CountsWrapper = styled.TouchableOpacity`
  flex-direction: row;
  gap: 12px;
`;

export const ContentsWrapper = styled.View`
  margin: 0 12px;
`;

export const HashTagWrapper = styled.View`
  margin: 16px 12px 20px;
`;
