import { BsFillPatchCheckFill } from "react-icons/bs";
import "./experience.css";

export default function Skills(props) {
  return (
    <div className="skills_content">
      <article className="skills_details">
        <BsFillPatchCheckFill className="experience_details_icon" />
        <h4>
          {props.skill} {props.softSkill}
        </h4>
      </article>
    </div>
  );
}
