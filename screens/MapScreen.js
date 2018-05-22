import React from 'react';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { getCurrentPositionAsync } from '../src/location';
import { changeMapRegion } from '../src/actions/MapActions';
import { Icon } from 'react-native-elements';
import { View } from 'react-native';
import styled from 'styled-components';
import { debounce } from 'lodash';

const IconBar = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
`;

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
  };

  changeMapRegionDebounced = debounce(this.props.changeMapRegion, 50);

  render() {
    const { mapRegion } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={mapRegion}
          onRegionChangeComplete={(e) => this.changeMapRegionDebounced(e)}
          // Cancel debounce each time the user pans the screen to avoid shakes.
          onRegionChange={this.changeMapRegionDebounced.cancel}
        >
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
