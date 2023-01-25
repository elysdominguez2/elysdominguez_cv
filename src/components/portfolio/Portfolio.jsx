import "./portfolio.css";
import Project from "./Project";
import choose from "../../images/ChooseYourAd.png";
import equal from "../../images/EqualGameImg.png";
import arteEnMi from "../../images/ArteEnMi.png";
import chaniar1 from "../../images/chaniar1.png";
import chaniar2 from "../../images/chaniar2.png";
import portfolio from "../../images/PortfolioEly.png";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/theme/selectors";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "Choose your own adventure",
      video: choose,
      git_front:
        "https://github.com/elysdominguez2/chooseyourownadventure-front",
      git_back: "https://github.com/elysdominguez2/chooseyourownadventure-back",
      demo: "https://choose-your-own-adventure-app.netlify.app",
    },
    {
      id: 2,
      name: "Find the Bugs Equal Games ",
      video: equal,
      git_front: "https://github.com/elysdominguez2/equalgame",
      git_back: "",
      demo: "https://equal-game.netlify.app/",
    },
    {
      id: 3,
      name: "Portfolio Personal Projects",
      video: portfolio,
      git_front: "https://github.com/elysdominguez2/elysdominguez_cv",
      git_back: "",
      demo: "https://eliana-dominguez.netlify.app/",
    },
    {
      id: 4,
      name: "Tourism website - Chañar",
      video: chaniar1,
      git_front: "https://github.com/elysdominguez2/turismochaniar",
      git_back: "",
      demo: "http://chanar.surge.sh/",
    },
    {
      id: 5,
      name: "Tourism website - Chañar Two",
      video: chaniar2,
      git_front: "https://github.com/elysdominguez2/turismoviajeeuropa",
      git_back: "",
      demo: "http://chanareuropa.surge.sh/",
    },
    {
      id: 6,
      name: "Make up Website - Arte en mi",
      video: arteEnMi,
      git_front: "https://github.com/elysdominguez2/makeup-arteenmi",
      git_back: "",
      demo: "http://arteenmi.surge.sh/",
    },
  ];

  const theme = useSelector(selectTheme);

  return (
    <section className={theme} id="portfolio">
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
