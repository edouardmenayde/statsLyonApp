import {REQUEST_STATION, RECEIVE_STATION} from "../actions/station";

function station(state = {}, action) {
  switch (action.type) {
    case REQUEST_STATION:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_STATION:
      return Object.assign({}, state, {
        isFetching : false,
        item       : action.station,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

export function requestStation(state = {}, action) {
  switch (action.type) {
    case RECEIVE_STATION:
    case REQUEST_STATION:
      return Object.assign(
        {},
        state,
        station(state, action)
      );
    default:
      return state;
  }
}
