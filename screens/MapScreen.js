import React from 'react';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { getCurrentPositionAsync } from '../src/location';
import { changeMapRegion } from '../src/actions/MapActions';
import { Icon } from 'react-native-elements';
import { View } from 'react-native';
import styled from 'styled-components';
import { throttle } from 'lodash';

const IconBar = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const { Marker } = MapView;

/**
 * In this screen you can choose where your "Home" location for the reminders.
 */
class MapScreen extends React.Component {
  componentDidMount() {
    this.scrollToCurrentLocation();
  }

  /**
   * Scrolls the map to your current GPS location.
   *
   * @return {Promise<void>}
   */
  scrollToCurrentLocation = async () => {
    const coords = await getCurrentPositionAsync();
    this.props.changeMapRegion(coords);
    this.mapView.animateToCoordinate(coords);
  };

  changeMapRegionDebounced = throttle(this.props.changeMapRegion, 500);

  render() {
    const { mapRegion } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <MapView
          ref={mapView => this.mapView = mapView}
          style={{ flex: 1 }}
          initialRegion={mapRegion}
          onRegionChange={(e) => this.changeMapRegionDebounced(e)}
        >
          <Marker
            coordinate={mapRegion}
          />
        </MapView>
        <IconBar>
          <Icon
            reverse
            name="near-me"
            onPress={this.scrollToCurrentLocation}
          />
        </IconBar>
      </View>
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
