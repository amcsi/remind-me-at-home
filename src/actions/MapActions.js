import { CHANGE_MAP_REGION } from './types';

export function changeMapRegion(region) {
  return {
    type: CHANGE_MAP_REGION,
    payload: region,
  };
}
