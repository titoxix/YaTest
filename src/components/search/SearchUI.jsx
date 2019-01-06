import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const SearchUI = (props) => {
    return (
        <div>
            <button
                className={!props.searching ? "fluid ui button" : "fluid ui loading button"}
                type="button"
                onClick={() => { props.search() }}>Buscar</button>
            <Map google={props.google}
                zoom={9}
                style={{ width: '100%', height: '95%', position: 'relative' }}
                className={'map'}
                initialCenter={props.currentLocation}
                disableDefaultUI={true}>

                <Marker
                    draggable={true}
                    animation={props.google.maps.Animation.DROP}
                    position={props.currentLocation}
                    onDragend={(t, map, coord) => props.onMarkerDragEnd(coord)} />
            </Map>
        </div>
    )
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyBLKnAf-nd8ZslFX45YgUp9yWX9guXD22o")
})(SearchUI)