import React from 'react';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { getCurrentPositionAsync } from '../src/location';
import { changeMapRegion } from '../src/actions/MapActions';

class MapScreen extends React.Component {
  componentDidMount() {
    this.scrollToCurrentLocation();
  }

  async scrollToCurrentLocation() {
    const coords = await getCurrentPositionAsync();
    this.props.changeMapRegion(coords);
  }

  render() {
    const { mapRegion } = this.props;

    return (
      <MapView style={{ flex: 1 }} region={mapRegion}>
      </MapView>
    );
    // TODO loading spinner when moving to user's current location.
  }
}

function mapStateToProps({ mapRegion }) {
  return {
    mapRegion,
  };
}

export default connect(mapStateToProps, { changeMapRegion })(MapScreen);
