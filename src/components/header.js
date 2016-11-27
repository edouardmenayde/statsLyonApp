import React, {Component, PropTypes} from "react";
import {StyleSheet, Text, View, Dimensions, Animated} from "react-native";
import debounce from "lodash.debounce";
import {SearchBar} from "./search-bar";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as StationsAction from "../actions/stations";
import {StationPreviewList} from "./stationPreviewList";
import {Actions} from "react-native-router-flux";
// import renderIf from "render-if";

class Header extends Component {

  static propTypes = {
    stations: PropTypes.array.isRequired,
    actions : PropTypes.object.isRequired
  };

  static defaultProps = {
    stations: [],
    actions : {}
  };

  constructor(props) {
    super(props);

    this.state = {
      showStationPreviewList: false
    };

    this.searchDebounced = debounce(this.search, 200);
  }

  search(input) {
    const {actions} = this.props;
    actions.fetchStations(input);

    this.setState({
      showStationPreviewList: !!input.length
    });
  }

  handleFocus() {
    this.setState({
      showStationPreviewList: true
    });
  }

  clear() {
    const {actions} = this.props;
    actions.clearStations();
  }

  stationSelected(stationID) {
    this.clear();
    Actions.station(stationID);
  }

  _renderStationPreviewList() {
    const {stations, actions}      = this.props;

    return (
      <StationPreviewList
        stations={stations}
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
      />
    );
  }

  render() {
    const {showStationPreviewList} = this.state;

    return (
      <Animated.View style={styles.searchBarContainer}>
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
const styles = StyleSheet.create({
  searchBarContainer: {
    position  : 'absolute',
    right     : 0,
    top       : 0,
    paddingTop: 0,
    left      : 0
  }
});

const mapStateToProps = (state) => ({
  stations: state.requestStations.items
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(StationsAction, dispatch),
  dispatch: dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
