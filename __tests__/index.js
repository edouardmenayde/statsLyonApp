import "react-native";
import React from "react";

import setup from "../src";

import renderer from "react-test-renderer";

const Index = setup();

describe('Index', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Index />
    );
  });
});
