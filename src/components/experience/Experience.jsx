import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

export default function Experience() {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My experience</h2>

      <div className="container experience_container">
        <div className="experience_hard_skills">
          <h3>Skills</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsFillPatchCheckFill />
              <h4>HTML</h4>
            </article>
          </div>
        </div>

        <div className="experience_soft_skills">
          <h3>Soft Skills</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsFillPatchCheckFill />
              <h4>HTML</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
