import React from "react";
import usePost from "containers/usePost";
import { useParams, useHistory } from "react-router-dom";
import LinkButton from "components/LinkButton/LinkButton";
import { PostDetailContainer, PostActions, FailedDeletePost } from "./style";
import Button from "components/Button";
import { SkeletonTitle, SkeletonParagraph } from "components/Skeleton";
import { SkeletonButton } from "components/Skeleton/style";
import Error from "components/Error/Error";
import useDeletePost from "containers/useDeletePost";

export default function PostDetail() {
  const history = useHistory();
  const { postId } = useParams<{ postId: string }>();
  const { postLoading, post, postError, retrypost } = usePost(Number(postId));
  const { deletePost, deletePostLoading, deletePostError } = useDeletePost();

  async function onDeletePost() {
    deletePost(Number(postId), () => history.push("/"));
  }

  return (
    <PostDetailContainer>
      {() => {
        if (postLoading || deletePostLoading) {
          return (
            <>
              <SkeletonTitle />
              <SkeletonParagraph count={5} />
              <SkeletonButton />
            </>
          );
        }

        if (postError) {
          return <Error retry={retrypost} />;
        }

        if (post === null) {
          return (
            <h1>
              Not found, click <LinkButton to="/">here</LinkButton> to back
            </h1>
          );
        }

        return (
          <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <PostActions>
              <LinkButton to="/">See all posts</LinkButton>
              <Button themed="danger" onClick={onDeletePost}>
                Remove
              </Button>
              <FailedDeletePost hasError={deletePostError !== null}>
                Failed to delete post, try again!
              </FailedDeletePost>
            </PostActions>
          </>
        );
      }}
    </PostDetailContainer>
  );
}
