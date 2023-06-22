"use client";
import GoogleMapReact from "google-map-react";

interface IProps {
  lat: number;
  lng: number;
  text: string;
}

interface ICenter {
  lat: number;
  lng: number;
}

const AnyReactComponent: React.FC<IProps> = ({ text }) => <div>{text}</div>;

const SimpleMap: React.FC = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDaERPmsWGDCk2MrKXsqkMfPkSu614Simk" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
