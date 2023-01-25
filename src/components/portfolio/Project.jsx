import "./portfolio.css";

export default function Project(props) {
  return (
    <div>
      <article className="portfolio_item">
        <img src={props.project.video} alt="a short video of my project" />
        <a
          href={props.project.demo}
          target="_blank"
          rel="noreferrer"
          className="live-demo"
        >
          <h3>LIVE DEMO: {props.project.name}</h3>
        </a>
        <div className="portfolio_item_cta">
          <a
            href={props.project.git_front}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Front - GitHub
          </a>
          {props.project.git_back === "" ? (
            ""
          ) : (
            <a
              href={props.project.git_back}
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Back - GitHub
            </a>
          )}
          {props.project.name === "Choose your own adventure" ? (
            ""
          ) : (
            <a
              href={props.project.demo}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </article>
    </div>
  );
}
