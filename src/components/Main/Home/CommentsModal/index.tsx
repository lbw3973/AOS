import React, { useState } from "react";
import * as S from "./style";
import { IOpenCommentsModal } from "@/types/post";
import ReactNativeModal from "react-native-modal";
import OMGText from "@/components/Common/OMGText";
import mockData from "@/mocks/mock_post.json";
import theme from "@/styles/theme";
import { Image, NativeSyntheticEvent, TextLayoutEventData, TouchableOpacity } from "react-native";
import { splitHashTags } from "@/utils/splitHashTags";
import CommentItem from "../CommentItem";

const CommentsModal = ({ openCommentsModal }: { openCommentsModal: IOpenCommentsModal }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getLineLength = (e: NativeSyntheticEvent<TextLayoutEventData>) => {
    return e.nativeEvent.lines.length;
  };

  return (
    <ReactNativeModal
      isVisible={openCommentsModal.isOpenCommentsModal}
      style={{ margin: "auto" }}
      swipeDirection="down"
      onSwipeComplete={() => openCommentsModal.setIsOpenCommentsModal(false)}
      onBackButtonPress={() => openCommentsModal.setIsOpenCommentsModal(false)}
    >
      <S.Container>
        <S.ContentsContainer>
          <S.SlideBar />
          <S.PostHeader>
            <S.ProfileImage src={mockData[0].profileImage} />
            <S.UserDateWrapper>
              <OMGText>{mockData[0].userName}</OMGText>
              <OMGText style={{ color: theme.colors.place_holder }}>{mockData[0].created_at}</OMGText>
            </S.UserDateWrapper>
          </S.PostHeader>
          <S.CountsContainer>
            <S.CountsWrapper>
              <Image source={require("@/assets/Icons/Main/Home/Icon_Likes.png")} />
              <OMGText>{mockData[0].likes.length}</OMGText>
            </S.CountsWrapper>
            <S.CountsWrapper>
              <Image source={require("@/assets/Icons/Main/Home/Icon_Comments.png")} />
              <OMGText>{mockData[0].comments.length}</OMGText>
            </S.CountsWrapper>
          </S.CountsContainer>
          <S.ContentsWrapper>
            <OMGText onTextLayout={getLineLength} numberOfLines={isExpanded ? undefined : 3}>
              {mockData[0].contents}
            </OMGText>
            <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)} style={{ alignSelf: "flex-start" }}>
              <OMGText style={{ color: "#9b9b9b" }}>{isExpanded ? " 간단히 보기" : " 더보기"}</OMGText>
            </TouchableOpacity>
          </S.ContentsWrapper>
          <S.HashTagWrapper>
            <OMGText style={{ color: "#699d51" }}>
              {splitHashTags(mockData[0].hashtags).map((hashtag, index) => `${index === 0 ? "" : "#"}${hashtag} `)}
            </OMGText>
          </S.HashTagWrapper>
        </S.ContentsContainer>
        <S.Devider />
        <S.CommentsContainer
          data={mockData[0].comments}
          renderItem={({ item }) => <CommentItem commentsProps={item} />}
          showsVerticalScrollIndicator={false}
          // ItemSeparatorComponent={}
        />
      </S.Container>
    </ReactNativeModal>
  );
};

export default CommentsModal;
