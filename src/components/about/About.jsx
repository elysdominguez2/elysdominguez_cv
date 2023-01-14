import "./about.css";
import MeMovie from "../../images/MeMovieAbout.gif";
import ME from "../../images/PhotoCV.png";

export default function About() {
  return (
    <section className="about" id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={MeMovie} alt="a short video of myself" />
          </div>
        </div>
        <div className="about_content">
          <p>
            Creating for me is a lifestyle, from make up, cakes, events and
            today functional code. All this makes world look more beautiful.
          </p>
          <p>
            I am a Argentinian developer living in the Netherlands. Excited and
            fearless with this new challenge of living abroad I started again
            from scratch.
          </p>
          <p>
            When I have a goal I don't stop and go for more. Thanks to that, I
            managed to get promoted in my jobs, make my passions professions,
            won medals in women's volleyball as a teenager and maintain study
            streaks in language applications for almost two years.
          </p>
          <p>
            I am constant, determined and passionate. I like to invest my time
            productively.
          </p>
        </div>
      </div>
      <div className="about_pictures">
        <img src={ME} alt="me" />
        <img src={ME} alt="me" />
        <img src={ME} alt="me" />
        <img src={ME} alt="me" />
        <img src={ME} alt="me" />
        <img src={ME} alt="me" />
      </div>
    </section>
  );
}
