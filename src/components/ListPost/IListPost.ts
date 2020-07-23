import Post from "entities/Post.entity";

export interface IListPostProps {
  isLoading: boolean;
  posts: Post[];
  error: any;
  retry: () => void;
  onClickPost(postId: number): void;
}
