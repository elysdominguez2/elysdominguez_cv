import "./portfolio.css";
import Project from "./Project";
import ProMovie from "../../images/MeMovieAbout.gif";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "Choose your own adventure",
      video: ProMovie,
      git_front:
        "https://github.com/elysdominguez2/chooseyourownadventure-front",
      git_back: "https://github.com/elysdominguez2/chooseyourownadventure-back",
      demo: "",
    },
    {
      id: 2,
      name: "Equal Games",
      video: ProMovie,
      git_front: "https://github.com/elysdominguez2",
      git_back: "",
      demo: "https://www.google.com/",
    },
    {
      id: 3,
      name: "Make up Website - Arte en mi",
      video: ProMovie,
      git_front: "https://github.com/elysdominguez2",
      git_back: "",
      demo: "https://www.google.com/",
    },
    {
      id: 4,
      name: "Tourism website - Chañar",
      video: ProMovie,
      git_front: "",
      git_back: "",
      demo: "https://www.google.com/",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {projects.map((p) => (
          <div key={p.id}>
            <Project project={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
