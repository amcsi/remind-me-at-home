import React from 'react';
import { MapView } from 'expo';
import { getCurrentPositionAsnyc } from '../src/location';
import { connect } from 'react-redux';
import { changeMapRegion } from '../src/actions/MapActions';

class MapScreen extends React.Component {
  componentDidMount() {
    this.scrollToCurrentLocation();
  }

  async scrollToCurrentLocation() {
    const position = await getCurrentPositionAsnyc();
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
