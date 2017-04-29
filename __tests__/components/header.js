import "react-native";
import React from "react";

import {Header} from "../../src/components/header";

import renderer from "react-test-renderer";

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Header />
    );
  });
});
