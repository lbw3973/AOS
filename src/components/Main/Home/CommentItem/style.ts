import styled from "styled-components/native";

export const Container = styled.Pressable`
  margin: 8px 20px 8px 12px;
`;

export const CommentWrapper = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const ProfileImage = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 25px;
`;
export const CountsWrapper = styled.TouchableOpacity`
  flex-direction: row;
  gap: 12px;
  margin-top: 10px;
`;

export const ReplyContainer = styled(CommentWrapper)`
  margin: 16px 0 0 36px;
`;
