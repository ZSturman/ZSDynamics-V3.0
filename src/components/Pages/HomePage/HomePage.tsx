import HomePageTop from "./HomePageTop";
import AboutSnippet from "./AboutSnippet";
import Services from "./Services";
import "./HomePage.scss"

const HomePage = () => {
  return (
    <section className="content-page">
      <HomePageTop />
      <AboutSnippet />
      <Services />
    </section>
  );
};

export default HomePage;
