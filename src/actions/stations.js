export const REQUEST_STATIONS = 'REQUEST_STATIONS';

export function requestStations() {
  return {
    type: REQUEST_STATIONS
  };
}

export const RECEIVE_STATIONS = 'RECEIVE_STATIONS';

export function receiveStations(stations) {
  return {
    type      : RECEIVE_STATIONS,
    stations  : stations.map(station => station),
    receivedAt: Date.now()
  };
}

export const CLEAR_STATIONS = 'CLEAR_STATIONS';

export function clearStations() {
  return {
    type: CLEAR_STATIONS
  }
}

function handleErrors(response) {
  if(!response.ok) {
    console.error(`Error ${response.status}`);
  }
  return response;
}

export function fetchStations(searchInput) {
  return function (dispatch) {

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
        console.error(error)
      });
  }
}
