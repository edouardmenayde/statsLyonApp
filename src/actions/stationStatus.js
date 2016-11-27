export const REQUEST_STATION_STATUS = 'REQUEST_STATION_STATUS';

export function requestStationStatus(stationID) {
  return {
    type     : REQUEST_STATION_STATUS,
    stationID: stationID
  };
}

export const RECEIVE_STATION_STATUS = 'RECEIVE_STATION_STATUS';

export function receiveStationStatus(stationStatus) {
  return {
    type      : REQUEST_STATION_STATUS,
    station   : stationStatus,
    receivedAt: Date.now()
  }
}

export function fetchStationStatus(stationID, from, to) {
  return function (dispatch) {
    dispatch(requestStationStatus(stationID));

    return fetch(`http://localhost:1337/status/${stationID}`, {
      from: from,
      to  : to
    })
  }
}