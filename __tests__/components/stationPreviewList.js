import "react-native";
import React from "react";

import {StationPreviewList} from "../../src/components/stationPreviewList";

import renderer from "react-test-renderer";

describe('StationPreviewList', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <StationPreviewList />
    );
  });
});
