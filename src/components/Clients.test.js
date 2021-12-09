import React from "react";
import renderer from "react-test-renderer";

import Clients from "./Clients";

describe("Snapshot testing section", () => {
  it("renders when there are no items", () => {
    const tree = renderer.create(<Clients />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders when there is one item", () => {
    const tree = renderer
      .create(<Clients clientsList={["One item"]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders when there are multiple items", () => {
    const tree = renderer
      .create(
        <Clients clientsList={["Item 1", "Item 2", "Item 3", "Item 4"]} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
