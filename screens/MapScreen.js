import React from 'react';
import { MapView } from 'expo';
import { getCurrentPositionAsnyc } from '../src/location';

class MapScreen extends React.Component {
  state = {
    initialRegion: void 0,
  };

  async componentDidMount() {
    try {
      const position = await getCurrentPositionAsnyc();
      const { latitude, longitude } = position.coords;
      this.setState({
        initialRegion: {
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }
      })
    } catch (e) {
      this.setState({ initialRegion: null });
    }
  }

  render() {
    const { initialRegion } = this.state;

    if (initialRegion !== void 0) {
      return (
        <MapView style={{ flex: 1 }} initialRegion={initialRegion}>
        </MapView>
      );
    }

    // TODO loading spinner.
    return null;
  }
}

export default (MapScreen);
