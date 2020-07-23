import React from "react";
import renderer from "react-test-renderer";
import Home from "./Home";
import Post from "entities/Post.entity";

jest.mock("containers/useListPost", () => {
  const posts: Post[] = [{ id: 1, title: "title", body: "body" }];
  return () => {
    return {
      listPostLoading: false,
      posts,
    };
  };
});

describe("ViewPost", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
