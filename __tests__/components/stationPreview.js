import "react-native";
import React from "react";

import {StationPreview} from "../../src/components/stationPreview";

import renderer from "react-test-renderer";

describe('StationPreview', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <StationPreview
        station={{
          _source: {
            name     : 'Test',
            stationID: 0
          }
        }}
      />
    );
  });
});
