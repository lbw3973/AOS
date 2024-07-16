import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Dimensions, Image, NativeSyntheticEvent, TextLayoutEventData, TouchableOpacity } from "react-native";
import OMGText from "@/components/Common/OMGText";
import theme from "@/styles/theme";
import { splitHashTags } from "@/utils/splitHashTags";
import { IOpenCommentsModal, IPostData } from "@/types/post";
import { useAppNavigation } from "@/navigation/Navigation";

const PostItem = ({
  postProps,
  openCommentsModal,
}: {
  postProps: IPostData;
  openCommentsModal: IOpenCommentsModal;
}) => {
  const [swiperHeight, setSwiperHeight] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const navigation = useAppNavigation();

  const getLineLength = (e: NativeSyntheticEvent<TextLayoutEventData>) => {
    return e.nativeEvent.lines.length;
  };

  useEffect(() => {
    const { width } = Dimensions.get("window");
    const scale = postProps.images.length > 1 ? 1 : 1.25;
    setSwiperHeight(width * scale);
  }, []);

  return (
    <S.Container>
      <S.PostHeader>
        <S.ProfileImage src={postProps.profileImage} />
        <S.UserDateWrapper>
          <OMGText>{postProps.userName}</OMGText>
          <OMGText style={{ color: theme.colors.place_holder }}>{postProps.created_at}</OMGText>
        </S.UserDateWrapper>
        <Image source={require("@/assets/Icons/Main/Home/Icon_DM.png")} style={{ marginRight: 8 }} />
        <Image source={require("@/assets/Icons/Main/Home/Icon_ETC.png")} />
      </S.PostHeader>
      <S.ImageSwiper loop={false} $height={swiperHeight}>
        {postProps.images.map((image, index) => (
          <Image key={index} src={image} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        ))}
      </S.ImageSwiper>
      <S.CountsContainer>
        <S.CountsWrapper>
          <Image source={require("@/assets/Icons/Main/Home/Icon_Likes.png")} />
          <OMGText>{postProps.likes.length}</OMGText>
        </S.CountsWrapper>
        <S.CountsWrapper onPress={() => openCommentsModal.setIsOpenCommentsModal(true)}>
          <Image source={require("@/assets/Icons/Main/Home/Icon_Comments.png")} />
          <OMGText>{postProps.comments.length}</OMGText>
        </S.CountsWrapper>
      </S.CountsContainer>
      <S.ContentsWrapper>
        <OMGText onTextLayout={getLineLength} numberOfLines={isExpanded ? undefined : 3}>
          {postProps.contents}
        </OMGText>
        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
          <OMGText style={{ color: "#9b9b9b" }}>{isExpanded ? " 간단히 보기" : " 더보기"}</OMGText>
        </TouchableOpacity>
      </S.ContentsWrapper>
      <S.HashTagWrapper>
        <OMGText style={{ color: "#699d51" }}>
          {splitHashTags(postProps.hashtags).map((hashtag, index) => `${index === 0 ? "" : "#"}${hashtag} `)}
        </OMGText>
      </S.HashTagWrapper>
    </S.Container>
  );
};

export default PostItem;
