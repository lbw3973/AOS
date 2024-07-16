import React, { useState } from "react";
import PostItem from "@/components/Main/Home/PostItem";
import mockData from "@/mocks/mock_post.json";
import { ScrollView } from "react-native";
import CommentsModal from "@/components/Main/Home/CommentsModal";

const Home = () => {
  const [isShowCommentsModal, setIsShowCommentsModal] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {mockData.map((item, index) => (
        <PostItem
          key={index}
          postProps={item}
          openCommentsModal={{
            isOpenCommentsModal: isShowCommentsModal,
            setIsOpenCommentsModal: setIsShowCommentsModal,
          }}
        />
      ))}
      <CommentsModal
        openCommentsModal={{
          isOpenCommentsModal: isShowCommentsModal,
          setIsOpenCommentsModal: setIsShowCommentsModal,
        }}
      />
    </ScrollView>
  );
};

export default Home;
