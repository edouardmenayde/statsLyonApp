import {REQUEST_STATIONS, RECEIVE_STATIONS, CLEAR_STATIONS} from "../actions/stations";

function stations(state = {
  isFetching: false
}, action) {
  switch (action.type) {
    case REQUEST_STATIONS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_STATIONS:
      return Object.assign({}, state, {
        isFetching : false,
        items      : action.stations,
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

export function requestStations(state = {}, action) {
  switch (action.type) {
    case RECEIVE_STATIONS:
    case REQUEST_STATIONS:
    case CLEAR_STATIONS:
      return Object.assign(
        {},
        state,
        stations(state, action)
      );
    default:
      return state;
  }
}
