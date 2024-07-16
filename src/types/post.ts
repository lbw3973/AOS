import { Dispatch, SetStateAction } from "react";

interface IPostData {
  userName: string;
  profileImage: string;
  images: string[];
  contents: string;
  hashtags: string;
  created_at: string;
  comments: ICommentData[];
  likes: ILikeData[];
}

interface ICommentData extends ILikeData {
  contents: string;
  comments?: ICommentData[];
  likes: ILikeData[];
  created_at: string;
}

interface ILikeData {
  userName: string;
  profileImage: string;
}

interface IOpenCommentsModal {
  isOpenCommentsModal: boolean;
  setIsOpenCommentsModal: Dispatch<SetStateAction<boolean>>;
}

export type { IPostData, ICommentData, ILikeData, IOpenCommentsModal };
