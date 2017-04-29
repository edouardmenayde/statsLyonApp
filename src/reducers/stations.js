/**
 * Stations
 * @flow
 */
import {REQUEST_STATIONS, RECEIVE_STATIONS, CLEAR_STATIONS} from "../constants/ActionTypes";

export function stations(state = {
  isFetching: true
}, action) {
  switch (action.type) {
    case REQUEST_STATIONS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_STATIONS:
      return Object.assign({}, state, {
        isFetching : false,
        items      : action.items,
        lastUpdated: action.receivedAt
      });
    case CLEAR_STATIONS:
      return Object.assign({}, state, {
        items: []
      });
    default:
      return state;
  }
}
