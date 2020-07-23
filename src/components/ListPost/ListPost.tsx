import React from "react";
import { StyledListPost, ListPostContainer } from "./style";
import { IListPostProps } from "./IListPost";
import { ViewPost } from "components/ViewPost/ViewPost";
import ErrorComponent from "components/Error/Error";

export default function ListPost({
  posts,
  isLoading,
  error,
  retry,
  onClickPost,
}: IListPostProps) {
  const isEmpty = !isLoading && posts.length === 0;

  return (
    <ListPostContainer>
      <StyledListPost>
        {() => {
          if (isLoading) {
            return (
              <>
                <ViewPost isLoading />
                <ViewPost isLoading />
                <ViewPost isLoading />
                <ViewPost isLoading />
                <ViewPost isLoading />
                <ViewPost isLoading />
              </>
            );
          }

          if (error) {
            return <ErrorComponent retry={retry} />;
          }

          if (isEmpty) {
            return <h2>No posts...</h2>;
          }

          return posts.map((post) => (
            <ViewPost
              key={post.id}
              onClick={() => onClickPost(post.id)}
              post={post}
            />
          ));
        }}
      </StyledListPost>
    </ListPostContainer>
  );
}
