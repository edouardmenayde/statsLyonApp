/**
 * StationStatus
 * @flow
 */
import {handleErrors} from "./utils";

import {REQUEST_STATION_STATUS, RECEIVE_STATION_STATUS} from "../constants/ActionTypes";

export function requestStationStatus(stationID: number) {
  return {
    type     : REQUEST_STATION_STATUS,
    stationID: stationID
  };
}

export function receiveStationStatus(stationStatus: Object) {
  return {
    type      : RECEIVE_STATION_STATUS,
    items     : stationStatus,
    receivedAt: Date.now()
  }
}

export function fetchStationStatus(stationID: number, from: Date, to: Date) {
  return function (dispatch: Function) {
    dispatch(requestStationStatus(stationID));

    return fetch(`http://localhost:1337/status/${stationID}`, {
      from: from,
      to  : to
    })
      .then(handleErrors)
      .then(response => response.json())
      .then((stationStatus) => {
        dispatch(receiveStationStatus(stationStatus));
      })
      .catch(error => {
        console.error(error);
      });
  }
}
