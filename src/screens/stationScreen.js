/**
 * StationScreen
 * @flow
 */
import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ART,
  Animated,
  Easing,
  TouchableOpacity
} from "react-native";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as StationActions from "../actions/station";
import * as StationStatusActions from "../actions/stationStatus";
import * as StationStatsActions from "../actions/stationStats";

import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Spinner from "react-native-spinkit";

import moment from "moment";
import * as Progress from "react-native-progress";

import Chart from "react-native-chart";

const chartSize = Math.min(Dimensions.get('window').width, Dimensions.get('window').height);

const styles = StyleSheet.create({
  container  : {
    backgroundColor: '#F5F5F5',
    width          : Dimensions.get('window').width,
    height         : Dimensions.get('window').height
  },
  placeholder: {
    justifyContent: 'center',
    alignItems    : 'center',
    flex          : 1
  },
  overview   : {
    height         : 100,
    backgroundColor: 'grey',
    flex           : 1
  },
  title      : {
    fontSize : 30,
    textAlign: 'center'
  },
  subTitle   : {
    fontSize: 20
  },
  chart      : {
    width : chartSize,
    height: chartSize,
  }
});

export class StationScreen extends Component {

  static renderNavigationBar(props) {
    return null;
  }

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    const {data, actions} = this.props;
    actions.fetchStation(data);
    actions.fetchStationStatus(data, moment().subtract(3, 'hours').toDate(), moment().toDate());
    actions.fetchStationStats(data);
  }

  _renderScrollViewContent() {
    const {station, stationStatus, stationStats} = this.props;

    const data = [
      [
        [0, 1],
        [1, 3],
        [3, 7],
        [4, 9]
      ],
    ];

    return (
      <ScrollView
        style={styles.container}
      >
        <View>
          <Text style={styles.title}>{station.item._source.name}</Text>

          <View style={styles.overview}>
            <Text style={styles.subTitle}>Overview</Text>
            <Text><MaterialIcon name="location-city" size={20}/> {station.item._source.town}</Text>
            <Text><MaterialIcon name="plus-one" size={20}/> {station.item._source.bonus}</Text>
          </View>

          <Progress.Bar
            progress={stationStats.item.avg / station.item._source.stands}
            width={200}
            height={20}
          />

          <Chart
            style={styles.chart}
            data={data}
            verticalGridStep={5}
            type="line"
          />

        </View>
      </ScrollView>
    );
  }

  _renderPlaceholder() {
    return (
      <View style={styles.placeholder}>
        <Spinner
          isVisible={true}
          size={40}
          type="WanderingCubes"
          color="grey"
        />
      </View>
    );
  }

  render() {
    const {station, stationStatus, stationStats} = this.props;

    if (!station.isFetching && !stationStatus.isFetching && !stationStats.isFetching) {
      return this._renderScrollViewContent();
    }

    return this._renderPlaceholder();
  }

}

const mapStateTopProps = (state) => ({
  station      : state.station,
  stationStatus: state.stationStatus,
  stationStats : state.stationStats,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...StationActions,
    ...StationStatusActions,
    ...StationStatsActions
  }, dispatch)
});

export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(StationScreen);
