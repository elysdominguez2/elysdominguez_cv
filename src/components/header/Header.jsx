import CTA from "./CTA";
import "./header.css";
import SocialMedia from "./SocialMedia";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="container header_container">
        <div className="header_title">
          <h5>Hi! I'm</h5>
          <div className="name">
            <span>E</span>
            <span>L</span>
            <span>I</span>
            <span>A</span>
            <span>N</span>
            <span>A</span>
          </div>
          <h5 className="subtitle text-light">Fullstack Developer</h5>
        </div>
        <div className="header_display">
          <div className="me">{/* <img src={ME} alt="me" /> */}</div>

          <CTA />
          <SocialMedia className="header_social" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
