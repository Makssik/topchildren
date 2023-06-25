import GoogleMap from '../../GoogleMap';
import GoogleForm from '../../GoogleForm/GoogleForm';
import LureTextSection from '../../LureTextSection';
import Hero from '../../Hero/Hero';
const HomeView = () => {
    return ( 
        <>
            <Hero />
            <GoogleMap />
            <LureTextSection/>
            <GoogleForm/>
        </>
     );
}
 
export default HomeView;