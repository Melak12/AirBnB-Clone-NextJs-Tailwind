import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Room } from '../typings';
import { GeolibInputCoordinates } from 'geolib/es/types';
import { getCenter } from 'geolib';
import { MapPinIcon } from '@heroicons/react/24/outline';

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

type Props = {
    searchResult: Room[]
}

export default function Map({ searchResult }: Props) {

    const [selectedLocation, setSelectedLocation] = useState<Room | null>(null);
    const coordinates: GeolibInputCoordinates[] = searchResult.map(result => ({
        latitude: result.lat,
        longitude: result.long
    }));


    const center = getCenter(coordinates); //Returns Union Type

    const [viewPort, setViewPort] = useState({
        width: '100%',
        height: '100%',
        latitude: (typeof center == 'boolean') ? 51.525 : center.latitude,
        longitude: (typeof center == 'boolean') ? 7.4575 : center.longitude,
        zoom: 11
    })
    return (
        <ReactMapGL
            mapStyle="mapbox://styles/melake-ibrave/clar68kf7006f14ldvajnlbqa"
            mapboxAccessToken={process.env.mapbox_key}

            {...viewPort}
            onMove={(nextViewport: any) => setViewPort(nextViewport)}
        >
            {
                searchResult.map((result) => (
                    <div key={result.long}>

                        <Marker
                            longitude={result.long}
                            latitude={result.lat}
                            offset={new mapboxgl.Point(-10, -20)}

                        >

                            <MapPinIcon onClick={() => setSelectedLocation(result)} className='cursor-pointer h-10 text-2xl animate-bounce text-red-400' />


                        </Marker>

                        {/* Show Popup */}
                        {
                            selectedLocation != null && selectedLocation.long == result.long ? (
                                <Popup
                                    onClose={() => setSelectedLocation(null)}
                                    closeOnClick={true}
                                    latitude={result.lat}
                                    longitude={result.long}
                                >

                                    {result.title}

                                </Popup>
                            ) : (
                                false
                            )
                        }

                    </div>

                ))

            }

        </ReactMapGL>
    );
}