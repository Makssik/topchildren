import GoogleMaps from '../../GoogleMap';
import GoogleForm from '../../GoogleForm/GoogleForm';
import LureTextSection from '../../LureTextSection';
import Hero from '../../Hero/Hero';
import QuesAndAns from '../../QuesAndAns'
const HomeView = () => {
  return (
    <>
      <Hero />
      <LureTextSection />
      <QuesAndAns />
      <GoogleMaps />
      <GoogleForm />
    </>
  );
};

export default HomeView;
