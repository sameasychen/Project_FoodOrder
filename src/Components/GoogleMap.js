import React from 'react';
import { Route, Link } from 'react-router-dom'

import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";

const libraries = ["places"];
const mayContainerStyle = {
    width: "30vw",
    height: "40vh",
}

const center ={
    lat: 43.653225,
    lng: -79.383186,
}

export default function App(){
    const {isLoaded, loadError} = useLoadScript ({
        // googleMapsApiKey: "AIzaSyD-g4346Jbyx626QmWPTh-mfaCiYeR6hjY",
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,

        libraries,
    });

    if (loadError) return "Error Loading Maps";
    if(!isLoaded) return "Loading Maps";

    return <div>
        {/* <h4 className="bear">Bears</h4> */}
       <GoogleMap mapContainerStyle={mayContainerStyle} zoom={15} center={center}>
           <Marker 
           position={{lat: 43.653225,lng: -79.383186,}}/>
       </GoogleMap>
    </div>

}