import React from "react";
import { Map, Marker } from "pigeon-maps";

class LocalMap extends React.Component {
  render() {
    return (
      <Map height={400} defaultCenter={[55.37921, 13.16814]} defaultZoom={18}>
        <Marker width={50} anchor={[55.37921, 13.16814]} />
      </Map>
    );
  }
}

export default LocalMap;
