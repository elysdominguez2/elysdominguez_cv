import { SlSocialBehance } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { ImCodepen } from "react-icons/im";

export default function SocialMedia() {
  return (
    <div className="social">
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
  );
}
