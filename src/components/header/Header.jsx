import CTA from "./CTA";
import ME from "../../images/PhotoCV.png";
import "./header.css";
import HeaderSocial from "./HeaderSocial";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Eliana Dominguez</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
