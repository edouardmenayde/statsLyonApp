import "react-native";
import React from "react";

import {SearchBar} from "../../src/components/search-bar";

import renderer from "react-test-renderer";

describe('SearchBar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <SearchBar
        handleSearch={(input) => {
        }}
        handleClear={() => {
        }}
        handleFocus={() => {
        }}
        handleUnfocus={() => {
        }}
      />
    );
  });
});
