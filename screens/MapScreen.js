import React from 'react';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { getCurrentPositionAsync } from '../src/location';
import { changeMapRegion } from '../src/actions/MapActions';
import { Icon, Button } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import styled from 'styled-components';

const IconBar = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const ButtonBar = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
`

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

  render() {
    const { mapRegion } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <MapView
          ref={mapView => this.mapView = mapView}
          style={{ flex: 1 }}
          initialRegion={mapRegion}
          onRegionChange={this.props.changeMapRegion}
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
        <ButtonBar>
          <Button
            rounded
            title="Pick Home"
            containerViewStyle={styles.buttonContainer}
          />
        </ButtonBar>
      </View>
    );
    // TODO loading spinner when moving to user's current location.
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 'auto',
    right: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps({ mapRegion }) {
  return {
    mapRegion,
  };
}

export default connect(mapStateToProps, { changeMapRegion })(MapScreen);
