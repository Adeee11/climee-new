import React, { useState, useEffect, useRef } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import styles from "./style";

const ShowMap = ({
  latitude,
  longitude,
  customStyles,
  updatedCoordinates,
}: any) => {
  const mapRef = useRef(null);
  const [marker, setMarker] = useState<any>(null);
  const [region, setRegion] = useState({
    latitude: latitude === undefined ? 0 : latitude,
    longitude: longitude === undefined ? 0 : longitude,
    latitudeDelta: 10,
    longitudeDelta: 10,
  });
  const [val, setVal] = useState({
    latitude: latitude,
    longitude: longitude,
  });
  useEffect(() => {
    setMarker(null);
    handleCoordinates;
  }, [val]);

  const handleCoordinates = (val: any) => {
    if (val.latitude !== undefined) {
      setMarker(val);
      updatedCoordinates(val);
    }
  };

  return (
    <>
      <MapView
        customMapStyle={[
          {
            featureType: "all",
            elementType: "labels.text",
            stylers: [{ hue: "#ff0000" }],
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ hue: "#ff0000" }],
          },
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#444444" }],
          },
          {
            featureType: "administrative.country",
            elementType: "geometry.stroke",
            stylers: [{ saturation: "-5" }],
          },
          {
            featureType: "administrative.country",
            elementType: "labels.text",
            stylers: [{ hue: "#ff0000" }],
          },
          {
            featureType: "administrative.locality",
            elementType: "all",
            stylers: [{ hue: "#ff0000" }],
          },
          {
            featureType: "administrative.neighborhood",
            elementType: "all",
            stylers: [{ hue: "#ff0000" }],
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "all",
            stylers: [{ hue: "#ff0000" }],
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#e6ecf8" }],
          },
          {
            featureType: "landscape.man_made",
            elementType: "all",
            stylers: [
              { saturation: "-6" },
              { lightness: "-1" },
              { gamma: "1.60" },
              { weight: "1.94" },
              { color: "#e6ecf8" },
            ],
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#e6ecf8" }],
          },
          {
            featureType: "landscape.man_made",
            elementType: "labels.text",
            stylers: [{ hue: "#ff0000" }],
          },
          {
            featureType: "landscape.man_made",
            elementType: "labels.text.fill",
            stylers: [{ hue: "#ff0000" }],
          },
          {
            featureType: "landscape.natural",
            elementType: "all",
            stylers: [{ color: "#e6ecf8" }],
          },
          {
            featureType: "landscape.natural.landcover",
            elementType: "all",
            stylers: [{ hue: "#ff0000" }],
          },
          {
            featureType: "landscape.natural.landcover",
            elementType: "geometry",
            stylers: [{ color: "#ff0000" }],
          },
          {
            featureType: "landscape.natural.terrain",
            elementType: "all",
            stylers: [{ hue: "#ff0000" }],
          },
          {
            featureType: "landscape.natural.terrain",
            elementType: "geometry.fill",
            stylers: [{ hue: "#ff0000" }],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ hue: "#ff0000" }],
          },
          {
            featureType: "poi.attraction",
            elementType: "all",
            stylers: [{ hue: "#ff0000" }],
          },
          {
            featureType: "poi.park",
            elementType: "all",
            stylers: [{ hue: "#ff0000" }],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#84a2e2" }, { visibility: "on" }],
          },
          {
            featureType: "water",
            elementType: "labels",
            stylers: [{ color: "#ffffff" }],
          },
        ]}
        onPress={(e) => handleCoordinates(e.nativeEvent.coordinate)}
        provider={PROVIDER_GOOGLE}
        zoomControlEnabled={true}
        zoomTapEnabled={true}
        zoomEnabled={true}
        showsUserLocation={true}
        style={[styles.mapView, customStyles]}
        initialRegion={region}
        onRegionChange={(region) => setRegion(region)}
        ref={mapRef}
        // onUserLocationChange={(locationChangedResult) =>
        //   setRegion(locationChangedResult.nativeEvent.coordinate)
        // }
      >
        {marker === null ? (
          <Marker
            coordinate={{
              latitude: latitude === undefined ? 0 : latitude,
              longitude: longitude === undefined ? 0 : longitude,
            }}
          />
        ) : (
          <Marker coordinate={marker} />
        )}
      </MapView>
    </>
  );
};

export default ShowMap;
