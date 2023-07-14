import React from 'react';
import { Container } from '@mui/material';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// const API_KEY = 'AIzaSyDJB9bfDtKaw1DZqduPymYH_lFrtwTcrYA';

// const containerStyle = {
//   width: '400px',
//   height: '400px',
// };

// const markerPosition = { lat: 50.359772194415385, lng: 30.952223914943005 };


const GoogleMaps = () => {

//   return (
//     <section className="map">
//     <LoadScript googleMapsApiKey={API_KEY}>
//       <GoogleMap
//         center={markerPosition}
//         zoom={10}
//         mapContainerStyle={{ height: '400px', width: '80%' }}
//       >
//         <Marker position={markerPosition} />
//       </GoogleMap>
//     </LoadScript>
//     </section>
//   );
  return (
    <section className="map">
      <Container maxWidth={'1600px'} disableGutters={true}>
        <h2>Як нас знайти</h2>
        <p style={{ textAlign: 'center', marginBottom: '30px' }}>
          м. Бориспіль, вул. Глибоцька 122
        </p>
        <div className="wrapper">
                  <iframe
                      className='map__google'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17127.325458522475!2d30.959915307912386!3d50.34805156890745!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4e8cb1349d4ad%3A0x921940b70f99359e!2sBoryspil%20School%20%E2%84%963!5e0!3m2!1sru!2sua!4v1689335232155!5m2!1sru!2sua"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </section>
  );
};

export default GoogleMaps;
