/**
 * StationStatus
 * @flow
 */
import {REQUEST_STATION_STATUS, RECEIVE_STATION_STATUS} from "../constants/ActionTypes";

export function stationStatus(state = {
  isFetching: true
}, action) {
  switch (action.type) {
    case REQUEST_STATION_STATUS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_STATION_STATUS:
      return Object.assign({}, state, {
        isFetching : false,
        items      : action.items,
        lastUpdated: action.lastUpdated
      });
    default:
      return state;
  }
}
