import ZacharySturmanCartoon from "./images/ZacharySturmanCartoon.png";

const AboutPageIntro = () => {
  return (
    <div className="about-page-intro-container">
      <img
        className="cartoon-zachary"
        src={ZacharySturmanCartoon}
        alt="Cartoon Zachary"
      />

      <p className="about-me-summary">
        {" "}
        I’m a Software Engineer and Data Analyst with a focus on full-stack
        development and AI technologies. My career combines a solid background
        in software development with a growing expertise in data analysis and
        machine learning. I aim to embed AI into applications not just to keep
        up with tech trends, but to subtly outpace them.
      </p>
    </div>
  );
};

export default AboutPageIntro;
