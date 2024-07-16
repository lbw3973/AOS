import { View, Text, ListRenderItem, ListRenderItemInfo, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as S from "./style";
import { ICommentData } from "@/types/post";
import OMGText from "@/components/Common/OMGText";
import { RFValue } from "react-native-responsive-fontsize";

const CommentItem = ({ commentsProps }: { commentsProps: ICommentData }) => {
  return (
    <S.Container>
      <>
        <S.CommentWrapper>
          <S.ProfileImage src={commentsProps.profileImage} />
          <View>
            <OMGText>{commentsProps.userName}</OMGText>
            <OMGText>{commentsProps.created_at}</OMGText>
          </View>
          <View style={{ flex: 1 }}>
            <OMGText>{commentsProps.contents}</OMGText>
            <TouchableOpacity>
              <OMGText style={{ fontSize: RFValue(14, 800), color: "#717171" }}>답글 달기</OMGText>
            </TouchableOpacity>
          </View>
          <S.CountsWrapper>
            <Image source={require("@/assets/Icons/Main/Home/Icon_Likes.png")} style={{ width: 16, height: 16 }} />
            <OMGText>{commentsProps.likes.length}</OMGText>
          </S.CountsWrapper>
        </S.CommentWrapper>
        {commentsProps.comments?.map((comment, index) => (
          <S.ReplyContainer key={index}>
            <S.ProfileImage src={comment.profileImage} />
            <View>
              <OMGText>{comment.userName}</OMGText>
              <OMGText>{comment.created_at}</OMGText>
            </View>
            <View style={{ flex: 1 }}>
              <OMGText>{comment.contents}</OMGText>
              <TouchableOpacity style={{ alignSelf: "flex-start" }}>
                <OMGText style={{ fontSize: RFValue(14, 800), color: "#717171" }}>답글 달기</OMGText>
              </TouchableOpacity>
            </View>
            <S.CountsWrapper>
              <Image source={require("@/assets/Icons/Main/Home/Icon_Likes.png")} style={{ width: 16, height: 16 }} />
              <OMGText>{comment.likes.length}</OMGText>
            </S.CountsWrapper>
          </S.ReplyContainer>
        ))}
      </>
    </S.Container>
  );
};

export default CommentItem;
