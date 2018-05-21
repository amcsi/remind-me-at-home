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
