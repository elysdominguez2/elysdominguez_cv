import "./footer.css";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";
import { SlSocialBehance } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { ImCodepen } from "react-icons/im";

export default function Footer() {
  return (
    <footer>
      <div className="social-footer">
        <a
          href="https://www.linkedin.com/in/elianadominguez/"
          target="_blank"
          rel="noreferrer"
        >
          <SlSocialLinkedin />
        </a>
        <a
          href="https://github.com/elysdominguez2"
          target="_blank"
          rel="noreferrer"
        >
          <VscGithubAlt />
        </a>
        <a
          href="https://www.behance.net/elysdoming1ebe"
          target="_blank"
          rel="noreferrer"
          className="behance"
        >
          <SlSocialBehance />
        </a>
        <a
          href="https://codepen.io/elysdominguez2"
          target="_blank"
          rel="noreferrer"
        >
          <ImCodepen />
        </a>
      </div>

      <p className="sign">
        Coded with &nbsp; <HiHeart className="heart" />
        &nbsp; by Eliana
      </p>

      <a href="#" className="footer_up">
        <FaArrowAltCircleUp />
      </a>
    </footer>
  );
}
