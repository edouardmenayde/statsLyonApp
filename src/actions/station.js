/**
 * Station
 * @flow
 */
import {handleErrors} from "./utils";

import {REQUEST_STATION, RECEIVE_STATION} from "../constants/ActionTypes";

export function requestStation() {
  return {
    type: REQUEST_STATION
  };
}

export function receiveStation(station: Object) {
  return {
    type      : RECEIVE_STATION,
    item      : station,
    receivedAt: Date.now()
  };
}

export function fetchStation(stationID: number) {
  return function (dispatch: Function) {

    dispatch(requestStation(stationID));

    return fetch(`http://localhost:1337/station/${stationID}`, {
      method: 'GET'
    })
      .then(handleErrors)
      .then(response => response.json())
      .then(station => {
        dispatch(receiveStation(station));
      })
      .catch(error => {
        console.error(error);
      });
  }
}
