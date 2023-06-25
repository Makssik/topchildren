import { Container } from '@mui/material';

const GoogleMap = () => {
    return ( 
        <section className="map">
            <Container  maxWidth={'1600px'} disableGutters={true}>
                <h2>Як нас знайти</h2>
                <p style={{textAlign: 'center', marginBottom: '30px'}}>
                    м. Бориспіль, вул. Шевченка 73
                </p>
                <div className="wrapper">
                    <iframe
                        title='googleMap'
                        className="map__google"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1272.6818841605175!2d30.95227546563936!3d50.35977110646951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4e8a0d4f24739%3A0x6f8424a3b0cf2522!2z0YPQuy4g0KjQtdCy0YfQtdC90LrQviwgNzMsINCR0L7RgNC40YHQv9C-0LvRjCwg0JrQuNC10LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMDgzMDA!5e0!3m2!1sru!2sua!4v1675893909451!5m2!1sru!2sua"
                        //   style="border: 0"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                            
                    </iframe>
                </div>
            </Container>
        </section>
     );
}
 
export default GoogleMap;