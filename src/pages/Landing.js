import NewestEntries from "../components/NewestEntries";
import Header from "../components/Header.js";
import LandingBG from "../img/LandingBG2.jpg";


const Landing = () => {
  return (
    <>
      <Header
        size={90}
        bgImage={LandingBG}
        title={'Bitcoin Fake News'}
      />
    </>
  );
};
export default Landing;
