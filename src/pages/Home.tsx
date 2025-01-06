import Articles from "../components/Articles";
import Banner from "../components/Banner";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Latests from "../components/Latests";
import Missions from "../components/Missions";

const Home = () => {
  return (
    <>
      <Header />
      <Articles />
      <Missions />
      <Latests />
      <Banner />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
