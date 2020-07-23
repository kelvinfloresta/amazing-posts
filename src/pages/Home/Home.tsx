import React, { Fragment, useState } from "react";
import useListPost from "containers/useListPost";
import ListPost from "components/ListPost/ListPost";
import { HomeTitle, FilterContainer } from "./style";
import { useHistory } from "react-router-dom";
import Input from "components/Input/Input";

export default function Home() {
  const history = useHistory();
  const [userId, setUserId] = useState<number | undefined>();
  const { listPostError, listPostLoading, posts, retryListPost } = useListPost(
    userId
  );

  function seePost(postId: number) {
    history.push("/" + postId);
  }

  function onChangeUserId(e: React.ChangeEvent<HTMLInputElement>) {
    const userId = Number(e.target.value);
    setUserId(userId || undefined);
  }

  return (
    <Fragment>
      <HomeTitle>The amazing posts</HomeTitle>

      <FilterContainer>
        <label>Search for User using ID</label>
        <Input
          onChange={onChangeUserId}
          inputMode="numeric"
          type="number"
          placeholder="Ex: 1"
        />
      </FilterContainer>

      <ListPost
        isLoading={listPostLoading}
        posts={posts}
        retry={retryListPost}
        error={listPostError}
        onClickPost={seePost}
      />
    </Fragment>
  );
}
