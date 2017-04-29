/**
 * Index
 * @flow
 */
import {combineReducers} from "redux";

import {stations} from "./stations";
import {station} from "./station";
import {stationStatus} from "./stationStatus";
import {stationStats} from "./stationStats";

const StatsLyonApp = combineReducers({
  station,
  stations,
  stationStatus,
  stationStats
});

export default StatsLyonApp;
