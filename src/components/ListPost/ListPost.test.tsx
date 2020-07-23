import React from "react";

import ListPost from "./ListPost";
import { render, fireEvent } from "@testing-library/react";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ViewPost } from "components/ViewPost/ViewPost";

Enzyme.configure({ adapter: new Adapter() });

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

beforeEach(() => {
  mockHistoryPush.mockReset();
});

describe("Name of the group", () => {
  it("should navigate correctly to the route when clicked", () => {
    const post = { id: 1, body: "Body", title: "Title" };
    const wrapper = Enzyme.shallow(
      <ListPost
        isLoading={false}
        posts={[post]}
        retry={console.log}
        error={null}
      />
    );
    const component = wrapper.find(ViewPost);
    component.simulate("click");
    const expectedRoute = "/" + post.id;
    expect(mockHistoryPush).toHaveBeenCalledWith(expectedRoute);
  });

  it("should not navigate when loading", () => {
    const post = { id: 1, body: "Body", title: "Title" };
    const wrapper = Enzyme.shallow(
      <ListPost isLoading posts={[]} retry={console.log} error={null} />
    );
    const component = wrapper.find(ViewPost).first();
    component.simulate("click");
    expect(mockHistoryPush).not.toHaveBeenCalled();
  });
});
