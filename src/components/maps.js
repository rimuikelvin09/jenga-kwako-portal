/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: -1.2921, // Replace with your office's latitude
    lng: 36.8219, // Replace with your office's longitude
};

const Maps = () => {
    return (
        <section sx={styles.section}>
            <LoadScript
                googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" // Replace with your Google Maps API key
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15} // Adjust zoom level as needed
                >
                    {/* Add any markers or additional map features here */}
                </GoogleMap>
            </LoadScript>
        </section>
    );
};

const styles = {
    section: {
        width: '100%',
        height: ['300px', '400px', '500px'], // Adjust height as needed
        position: 'relative',
    },
};

export default Maps;
