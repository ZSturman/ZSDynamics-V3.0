import HomePageTop from "./HomePageTop";
import AboutSnippet from "./AboutSnippet";
import ContactForm from "../ContactPage/ContactForm";

import "./HomePage.scss"

const HomePage = () => {
  return (
    <div className="content-page">

      <HomePageTop />
      <AboutSnippet />
      <ContactForm />
    </div>
  );
};

export default HomePage;
