import { Location, Permissions } from 'expo';
import {
  MOCK_CURRENT_LOCATION_LATITUDE,
  MOCK_CURRENT_LOCATION_LONGITUDE,
} from 'react-native-dotenv';

/**
 * Wrapper function for Location; ensures the location permission is enabled.
 */
export async function getLocationServiceWithPermissions() {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    // TODO show proper message to user asking to enable the location permission.
    console.error('Permission to access location was denied');
    throw new Error(status);
  }

  return Location;
}

export async function getCurrentPositionAsync() {
  if (MOCK_CURRENT_LOCATION_LATITUDE) {
    // Mock data.
    return {
      latitude: Number(MOCK_CURRENT_LOCATION_LATITUDE),
      longitude: Number(MOCK_CURRENT_LOCATION_LONGITUDE),
    };
  }
  const location = await getLocationServiceWithPermissions();
  // TODO do something about the possibility that getting the current position could fail.
  const { coords } = await location.getCurrentPositionAsync();
  return { latitude: coords.latitude, longitude: coords.longitude };
}
