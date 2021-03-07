import React from 'react';
import {
  GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow,
} from 'react-google-maps';
import './style.scss';

const mapFunc = () => (
  <>
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 48.108799, lng: -1.732730 }}
    />
    <Marker
      position={{ lat: 48.108799, lng: -1.732730 }}
    />
    <InfoWindow
      position={{ lat: 48.148799, lng: -1.732730 }}
    >
      <div className="maps__info">
        <h3 className="maps__info__title">Association Adopte Ton Choupi</h3>
        <h4 className="maps__info__subtitle">Horaires d'ouvertures :</h4>
        <ul>
          <li className="maps__info__open">Lundi : 10h - 12h / 14h - 17h</li>
          <li className="maps__info__open">Mardi : 10h - 12h / 14h - 17h</li>
          <li className="maps__info__open">Mercredi : 10h - 12h / 14h - 17h</li>
          <li className="maps__info__open">Jeudi : 10h - 12h / 14h - 17h</li>
          <li className="maps__info__open">Vendredi : 10h - 12h / 14h - 17h</li>
          <li className="maps__info__open">Samedi : 10h - 12h / 14h - 17h</li>
          <li>Dimanche : <p className="maps__info__closed">FERMÉ</p></li>
        </ul>
      </div>
    </InfoWindow>
  </>
);

const WrappedMap = withScriptjs(withGoogleMap(mapFunc));

const Maps = () => (
  <div style={{ width: '100%', height: '100%' }}>
    <WrappedMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCX52LPANdO48jA68d0tqQ0AIYTbUY1Jko"
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '100%' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  </div>
);

export default Maps;
