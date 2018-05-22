import { CHANGE_MAP_REGION } from '../actions/types';
import { isEqual, pick } from 'lodash';

const INITIAL_STATE = {
  latitude: 51.5074,
  longitude: 0.1278,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_MAP_REGION:
      const coordinateProperties = ['latitude', 'longitude'];
      const newCoordinates = pick(action.payload, coordinateProperties);
      if (isEqual(pick(state, coordinateProperties), newCoordinates)) {
        // Coordinates are the same; do not change them to avoid state change events.
        return state;
      }
      return { ...INITIAL_STATE, ...state, ...newCoordinates };

    default:
      return state;
  }
}
