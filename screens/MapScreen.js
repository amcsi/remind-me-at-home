import React from 'react';
import { Location, MapView } from 'expo';
import { connect } from 'react-redux';
import { changeMapRegion } from '../src/actions/MapActions';

class MapScreen extends React.Component {
  componentDidMount() {
    this.scrollToCurrentLocation();
  }

  async scrollToCurrentLocation() {
    const position = await Location.getCurrentPositionAsync();
    this.props.changeMapRegion(position.coords);
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
