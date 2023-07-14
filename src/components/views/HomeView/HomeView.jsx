import GoogleMaps from '../../GoogleMap';
import GoogleForm from '../../GoogleForm/GoogleForm';
import LureTextSection from '../../LureTextSection';
import Hero from '../../Hero/Hero';
const HomeView = () => {
  return (
    <>
      <Hero />
      <GoogleMaps />
      <LureTextSection />
      <GoogleForm />
    </>
  );
};

export default HomeView;
