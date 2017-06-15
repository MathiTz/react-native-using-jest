// __tests__/Person.js
import "react-native";
import React from "react";
import Person from "../Person";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Person />).toJSON();
  expect(tree).toMatchSnapshot();
});
