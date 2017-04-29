/**
 * StationStats
 * @flow
 */
import {REQUEST_STATION_STATS, RECEIVE_STATION_STATS} from "../constants/ActionTypes";

export function stationStats(state = {
  isFetching: true
}, action) {
  switch (action.type) {
    case REQUEST_STATION_STATS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_STATION_STATS:
      return Object.assign({}, state, {
        isFetching : false,
        item       : action.item,
        lastUpdated: action.lastUpdated
      });
    default:
      return state;
  }
}
