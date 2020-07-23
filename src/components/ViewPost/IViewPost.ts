import Post from "entities/Post.entity";

export interface IViewPostLoadedProps {
  post: Post;
  isLoading?: boolean;
  onClick?: () => void;
}

export interface IViewPostLoadingProps {
  post?: null | Post;
  isLoading: true;
  onClick?: () => void;
}
