/**
 * Header
 * @flow
 */
import React, {
  PropTypes,
  Component
} from 'react';
import {
  Platform,
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import debounce from "lodash.debounce";
import {SearchBar} from "./search-bar";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as StationsActions from "../actions/stations";
import {StationPreviewList} from "./stationPreviewList";
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    top       : 0,
    right     : 0,
    left      : 0,
    position  : 'absolute',
  }
});

export class Header extends Component {

  static propTypes = {
    stations: PropTypes.object.isRequired,
    actions : PropTypes.object.isRequired
  };

  static defaultProps = {
    stations: [],
    actions : {}
  };

  constructor(props: any) {
    super(props);

    this.state = {
      showStationPreviewList: false
    };

    this.searchDebounced = debounce(this.search, 200);
  }

  search(input: string) {
    const {actions} = this.props;
    actions.fetchStations(input);

    this.setState({
      showStationPreviewList: !!input.length
    });
  }

  hideStationPreviewList () {
    this.setState({
      showStationPreviewList: false
    });
  }

  showStationPreviewList () {
    this.setState({
      showStationPreviewList: true
    });
  }

  handleFocus() {
    this.showStationPreviewList();
  }

  handleUnfocus() {
    this.hideStationPreviewList();
  }

  clear() {
    const {actions} = this.props;
    actions.clearStations();
  }

  stationSelected(stationID: number) {
    this.clear();
    this.hideStationPreviewList();
    Actions.station(stationID);
  }

  _renderStationPreviewList() {
    const {stations, actions}      = this.props;

    return (
      <StationPreviewList
        stations={stations.items}
        actions={actions}
        handleStationSelected={(stationID) => this.stationSelected(stationID)}
      />
    );
  }

  _renderSearchBar() {
    return (
      <SearchBar
        handleSearch={(input) => this.searchDebounced(input)}
        handleClear={() => this.clear()}
        handleFocus={() => this.handleFocus()}
        handleUnfocus={() => this.handleUnfocus()}
      />
    );
  }


  render() {
    const {showStationPreviewList} = this.state;
    return (
      <Animated.View
        style={styles.container}
      >
        {
          this._renderSearchBar()
        }
        {
          showStationPreviewList ? this._renderStationPreviewList() : null
        }
      </Animated.View>
    );
  }
}

const mapStateToProps = (state) => ({
  stations: state.stations
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(StationsActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
