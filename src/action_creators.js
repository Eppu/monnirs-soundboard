export function loadConfig() {
  return (dispatch) => {
    var data = require('./config.json');
        dispatch({
          type: "FETCHED_CONFIG",
          config: data
        });
  };
}

export function setVolume(volume) {
  localStorage.setItem("volume", volume);

  return {
    type: "CHANGED_VOLUME",
    volume: volume
  };
}

export function loadVolume() {
  return {
    type: "CHANGED_VOLUME",
    volume: localStorage.getItem("volume") || 50
  };
}
