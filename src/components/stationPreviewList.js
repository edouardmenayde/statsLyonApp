/**
 * StationPreviewList
 * @flow
 */
import React, {Component, PropTypes} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  InteractionManager
} from "react-native";
import {StationPreview} from "./stationPreview";

const styles = {
  container: {
    width          : Dimensions.get('window').width,
    height         : Dimensions.get('window').height - 60,
    backgroundColor: 'hsl(0, 0%, 92%)'
  }
};

export class StationPreviewList extends Component {

  static propTypes = {
    stations: PropTypes.array.isRequired,
    actions : PropTypes.object.isRequired
  };

  static defaultProps = {
    stations: [],
    actions : {}
  };

  state = {
    showPlaceholder: true
  };

  constructor(props: any) {
    super(props);
  }

  handleStationSelected(stationID: number) {
    const {handleStationSelected} = this.props;
    handleStationSelected(stationID);
  }

  _renderPlaceholder() {
    return <View style={styles.container}/>
  }

  render() {
    const {stations}        = this.props;
    const {showPlaceholder} = this.state;

    if (showPlaceholder) {
      return this._renderPlaceholder();
    }

    return (
      <ScrollView
        style={styles.container}
        keyboardShouldPersistTaps
      >
        {stations.map((station, index) =>
          <StationPreview
            station={station}
            key={index}
            handleStationSelected={(stationID) => this.handleStationSelected(stationID)}
          />
        )}
      </ScrollView>
    );
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        showPlaceholder: false
      });
    });
  }
}
