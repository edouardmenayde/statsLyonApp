export const REQUEST_STATION = 'REQUEST_STATION';

export function requestStation() {
  return {
    type: REQUEST_STATION
  };
}

export const RECEIVE_STATION = 'RECEIVE_STATION';

export function receiveStation(station) {
  return {
    type      : RECEIVE_STATION,
    station   : station,
    receivedAt: Date.now()
  };
}

export function fetchStation(stationID) {
  return function (dispatch) {

    dispatch(requestStation(stationID));

    return fetch(`http://localhost:1337/station/${stationID}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(station => {
        dispatch(receiveStation(station));
      })
      .catch(error => {
        console.error(error);
      });
  }
}
