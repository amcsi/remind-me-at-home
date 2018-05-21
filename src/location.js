import { Location, Permissions } from 'expo';

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
  console.info('window', window);
  if (window.__DEV__) {
    // Mock data.
    return {
      latitude: 47.5282072,
      longitude: 19.0397632,
    };
  }
  const location = await getLocationServiceWithPermissions();
  // TODO do something about the possibility that getting the current position could fail.
  const { coords } = await location.getCurrentPositionAsync();
  return { latitude: coords.latitude, longitude: coords.longitude };
}
