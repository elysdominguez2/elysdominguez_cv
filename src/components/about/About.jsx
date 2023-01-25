import "./about.css";
import MeMovie from "../../images/MeMovieAbout.gif";
import Cake from "../../images/me-cake.jpg";
import Disney from "../../images/me-disney.jpg";
import Paint from "../../images/me-painting.jpg";
import Paris from "../../images/me-paris.png";
import Rollers from "../../images/me-rollers.png";
import Makeup from "../../images/me-makeup.png";

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
            I am a curious and passionate person who turns hobbies into
            professions, that's why I have so many studies and careers. I like
            to spend my time productively.
          </p>
        </div>
      </div>
      <div className="about_pictures">
        <img src={Paris} alt="me" />
        <img src={Paint} alt="me" />
        <img src={Cake} alt="me" />
        <img src={Disney} alt="me" />
        <img src={Makeup} alt="me" />
        <img src={Rollers} alt="me" />
      </div>
    </section>
  );
}
