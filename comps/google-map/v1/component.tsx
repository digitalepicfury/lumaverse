import styled from "@emotion/styled";
import MarkerClusterer from "@googlemaps/markerclustererplus";
import { useRouter } from "next/router";
import React from "react";
import { useRef, useEffect } from "react";
import { buildDataSource } from "../../../utils";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 65px);
`;

const data = buildDataSource();

// https://github.com/googlemaps/react-wrapper/blob/main/examples/basic.tsx
// https://github.com/googlemaps/react-wrapper
function GoogleMapComponent() { //   
  const ref: any = useRef(); // TODO: Fix "any" type
  const router = useRouter();   
  const { id } = router.query;

    useEffect(() => {   
      const infoWindows = data.map(({firstname, lastname, address}) => {
        return new google.maps.InfoWindow({
          content: "<b>Full Name:</b> " + firstname + " " + lastname + "<br\> <b>Address:</b> " + address,
        });
      });
      
      const markers = data.map(({location}) => {
        return new google.maps.Marker({
          position: location,
          label: '',          
        });
      });     

      const index: number = Number(id);
      let center: google.maps.LatLngLiteral = { lat: 37.63231172, lng: -122.0597118 }; 
      let zoom: number = 8;
      
      if (id && Number(id) !== -1) {
        center = data[index].location;
        zoom = 22;
      }

      const map = new window.google.maps.Map(ref.current, {        
        center: center,
        zoom: zoom,
      });
      
      const handleMarkerClick = (event: any, index: number) => {
        infoWindows[index].open(map, markers[index]);        
      }
      
      const listeners = markers.map((marker, index) => (
        marker.addListener("click", (event: any) => handleMarkerClick(event, index))        
      ));

      new MarkerClusterer(map, markers, {
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
      });  
      
      // Cleanup listeners on unmount
      return () => {
        if (listeners) {
          markers.forEach((marker) => {
            google.maps.event.clearListeners(marker, 'click');
          });
        }
      };
    });
  
    return (      
      <Container ref={ref} id="map"></Container>
    );
  }

  export default GoogleMapComponent;