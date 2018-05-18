import { CHANGE_MAP_REGION } from '../actions/types';

const INITIAL_STATE = {
  latitude: 51.5074,
  longitude: 0.1278,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_MAP_REGION:
      return { ...INITIAL_STATE, ...state, latitude: action.payload.latitude, longitude: action.payload.longitude };

    default:
      return state;
  }
}
