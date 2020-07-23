import React from "react";

import ListPost from "./ListPost";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ViewPost } from "components/ViewPost/ViewPost";

Enzyme.configure({ adapter: new Adapter() });

describe("Name of the group", () => {
  it("should call onClickPost when click on Post", () => {
    const post = { id: 1, body: "Body", title: "Title" };
    const onClickPostSpy = jest.fn();
    const wrapper = Enzyme.mount(
      <ListPost
        isLoading={false}
        posts={[post]}
        retry={console.log}
        error={null}
        onClickPost={onClickPostSpy}
      />
    );
    const component = wrapper.find(ViewPost);
    component.simulate("click");
    expect(onClickPostSpy).toHaveBeenCalledWith(post.id);
  });

  it("should not call onClickPost when Post is loading", () => {
    const post = { id: 1, body: "Body", title: "Title" };
    const onClickPostSpy = jest.fn();
    const wrapper = Enzyme.mount(
      <ListPost
        isLoading
        posts={[]}
        retry={console.log}
        error={null}
        onClickPost={onClickPostSpy}
      />
    );
    const component = wrapper.find(ViewPost).first();
    component.simulate("click");
    expect(onClickPostSpy).not.toHaveBeenCalled();
  });
});
