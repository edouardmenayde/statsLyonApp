/**
 * Stations
 * @flow
 */
import {handleErrors} from "./utils";
import {REQUEST_STATIONS, RECEIVE_STATIONS, CLEAR_STATIONS} from "../constants/ActionTypes";

export function requestStations() {
  return {
    type: REQUEST_STATIONS
  };
}

export function receiveStations(stations: []) {
  return {
    type      : RECEIVE_STATIONS,
    items     : stations.map(station => station),
    receivedAt: Date.now()
  };
}

export function clearStations() {
  return {
    type: CLEAR_STATIONS
  }
}

export function fetchStations(searchInput: string) {
  return function (dispatch: Function) {

    if (!searchInput) {
      return dispatch(receiveStations([]))
    }

    dispatch(requestStations());

    return fetch(`http://localhost:1337/station?query=${searchInput}`, {
      method: 'GET'
    })
      .then(handleErrors)
      .then(response => response.json())
      .then(stations => {
        dispatch(receiveStations(stations));
      })
      .catch(error => {
        console.error(error);
      });
  }
}
