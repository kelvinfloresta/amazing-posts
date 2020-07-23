import React from "react";
import renderer from "react-test-renderer";
import { ViewPost } from "./ViewPost";

describe("ViewPost", () => {
  it("should render loading correctly", () => {
    const tree = renderer.create(<ViewPost isLoading />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render post correctly", () => {
    const post = {
      id: 1,
      body: "Body",
      title: "Title",
    };
    const tree = renderer
      .create(<ViewPost post={post} onClick={() => console.log("clicked")} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render body with ellipsed text", () => {
    const post = {
      id: 1,
      body: new Array(10).fill("Really long text").join(", "),
      title: "Title",
    };
    const tree = renderer
      .create(<ViewPost post={post} onClick={() => console.log("clicked")} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
