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
            I am a creator at heart, from makeup and cakes to events and code.
            Making the world a more beautiful place is my passion. I am always
            seeking new opportunities to learn and grow, both personally and
            professionally. My career has been diverse and filled with
            challenges, but my determination and ambition have allowed me to
            overcome them and achieve success.
          </p>
          <p>
            As an Argentinian developer now living in the Netherlands, I am
            excited and fearless to embrace the new challenge of starting fresh
            in a foreign country.
          </p>
          <p>
            I have a strong entrepreneurial spirit and have built my own
            successful business for almost 5 years. I am a digital expert with a
            winner's mentality, always looking to improve and work
            collaboratively with others. I thrive on challenges and am always
            looking for new ways to push myself out of my comfort zone.
          </p>
          <p>
            In my free time, you can find me exploring new passions such as
            riding a bike, rollerblading, photography, and visiting museums. I
            am creative, passionate about learning, and have a positive
            attitude. I am determined to make the most of every opportunity and
            to always be better than I was yesterday.
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
