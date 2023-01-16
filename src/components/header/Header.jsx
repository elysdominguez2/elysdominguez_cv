import CTA from "./CTA";
import "./header.css";
import SocialMedia from "./SocialMedia";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/theme/slice";
import { selectTheme } from "../../store/theme/selectors";

export default function Header() {
  const dispatch = useDispatch();

  const theme = useSelector(selectTheme);

  const handleToggle = () => {
    dispatch(toggleTheme(theme));

    console.log("Esto es theme desde Header", theme);
  };

  return (
    <header className={theme}>
      <div className="mode">
        <label className="switch">
          <input type="checkbox" onClick={handleToggle} />
          <span className="slider round"></span>
        </label>
      </div>
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
          <div className="me"></div>

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
