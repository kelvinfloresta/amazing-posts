import React from "react";
import { IViewPostLoadingProps, IViewPostLoadedProps } from "./IViewPost";
import Card from "../Card/Card";
import { PostTitle, PostDescription } from "./style";
import useTextEllipsis from "containers/useTextEllipsis";
import { SkeletonTitle, SkeletonParagraph } from "components/Skeleton";

export function ViewPost(props: IViewPostLoadedProps | IViewPostLoadingProps) {
  const description = useTextEllipsis(props.post?.body);
  if (props.isLoading) {
    return (
      <Card height="200px">
        <SkeletonTitle />
        <SkeletonParagraph count={5} />
      </Card>
    );
  }
  const { post, onClick } = props;
  return (
    <Card height="200px" onClick={onClick}>
      <PostTitle title={post.title}>{post.title}</PostTitle>
      <PostDescription>{description}</PostDescription>
    </Card>
  );
}
