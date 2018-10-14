import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=YOURAPIKEY&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new window.google.maps.DirectionsService();
      const returnPointsList = []

      if (this.props.returnPoints){
        for (let i = 0; i < this.props.returnPoints.length; i++){
          const item = {}
          const returnPointsNumber  = this.props.returnPoints
          if (this.props.returnPoints[i]){
            item['location'] = new window.google.maps.LatLng(this.props.returnPoints[i].latitude,  this.props.returnPoints[i].longitude)
            returnPointsList.push(item)
          }
        }
      }else if (this.props.returnPointsDay2) {
        for (let i = 0; i < this.props.returnPointsDay2.length; i++){
          const item = {}
          const returnPointsNumber  = this.props.returnPointsDay2
          if (this.props.returnPointsDay2[i]){
            item['location'] = new window.google.maps.LatLng(this.props.returnPointsDay2[i].latitude,  this.props.returnPointsDay2[i].longitude)
            returnPointsList.push(item)
          }
        }
      }else if (this.props.returnPointsDay3) {
        for (let i = 0; i < this.props.returnPointsDay3.length; i++){
          const item = {}
          const returnPointsNumber  = this.props.returnPointsDay3
          if (this.props.returnPointsDay3[i]){
            item['location'] = new window.google.maps.LatLng(this.props.returnPointsDay3[i].latitude,  this.props.returnPointsDay3[i].longitude)
            returnPointsList.push(item)
          }
        }
      }

      DirectionsService.route(
        {
          origin: new window.google.maps.LatLng(this.props.latitude, this.props.longitude),
          destination: new window.google.maps.LatLng(this.props.latitude, this.props.longitude),
          travelMode: window.google.maps.TravelMode.DRIVING,
          waypoints: returnPointsList
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  })
)(props => (
  <div>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new window.google.maps.LatLng(props.latitude, props.longitude)}
  >

    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
  </div>
))

export default MyMapComponent;
