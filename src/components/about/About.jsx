import "./about.css";
import MeMovie from "../../images/MeMovieAbout.gif";

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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            voluptatem, tempora obcaecati a aperiam sint aspernatur libero sit
            tenetur quae hic! Vel eius illo soluta delectus cum. Voluptatem,
            neque asperiores?
          </p>
        </div>
      </div>
    </section>
  );
}
