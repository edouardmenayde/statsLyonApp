/**
 * StationStats
 * @flow
 */
import {handleErrors} from "./utils";

import {REQUEST_STATION_STATS, RECEIVE_STATION_STATS} from "../constants/ActionTypes";

export function requestStationStats(stationID: number) {
  return {
    type     : REQUEST_STATION_STATS,
    stationID: stationID
  };
}

export function receiveStationStats(stationStats: number) {
  return {
    type      : RECEIVE_STATION_STATS,
    item      : stationStats,
    receivedAt: Date.now()
  }
}

export function fetchStationStats(stationID: number) {
  return function (dispatch: Function) {
    dispatch(requestStationStats(stationID));

    let formData = new FormData();
    formData.append('field', 'availableStands');
    formData.append('statType', 'stats');

    return fetch(`http://localhost:1337/status/stat/${stationID}`, {
      method: 'POST',
      body  : formData
    })
      .then(handleErrors)
      .then(response => response.json())
      .then((stationStatus) => {
        dispatch(receiveStationStats(stationStatus));
      })
      .catch(error => {
        console.error(error);
      });
  }
}
