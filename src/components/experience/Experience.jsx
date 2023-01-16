import "./experience.css";
import Skills from "./Skills";
// import { BsFillPatchCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/theme/selectors";

export default function Experience() {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Redux",
    "Axios",
    "Express",
    "Node.JS",
    "PostgresSql",
    "Git-GitHub",
    "Bootstrap",
    "Tailwind",
  ];
  const softSkills = [
    "Positive",
    "Good Attitude",
    "Passion for learning",
    "Creative ",
    "I love challenges",
    "Social Attentive",
  ];

  const theme = useSelector(selectTheme);
  return (
    <section className={theme} id="experience">
      <h5>What skills I have</h5>
      <h2>My experience</h2>

      <div className="container experience_container">
        <div>
          <h3>Skills</h3>
          <div className="experience_hard_skills">
            {skills.map((s, index) => (
              <div key={index} className="prueba">
                <Skills skill={s} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3>Soft Skills</h3>
          <div className="experience_soft_skills">
            {softSkills.map((ss, index) => (
              <div key={index} className="prueba">
                <Skills softSkill={ss} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
