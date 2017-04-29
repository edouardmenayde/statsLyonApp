/**
 * Station
 * @flow
 */
import {REQUEST_STATION, RECEIVE_STATION} from "../constants/ActionTypes";

export function station(state = {
  isFetching: true
}, action) {
  switch (action.type) {
    case REQUEST_STATION:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_STATION:
      return Object.assign({}, state, {
        isFetching : false,
        item       : action.item,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}
