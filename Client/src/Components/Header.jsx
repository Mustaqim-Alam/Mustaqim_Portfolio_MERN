import { Link } from "react-router-dom";
import { PiGithubLogoLight } from "react-icons/pi";
const Header = () => {
  return (
    <nav className=" z-10">
      <div>
        <Link to="/">Mustaqim</Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/article">Article</Link>
          </li>
          <li>
            <Link to="/contact">Connect with me</Link>
          </li>
        </ul>
      </div>
      <div>
      <PiGithubLogoLight/>
        <button>GitHub</button>
      </div>
    </nav>
  );
};

export default Header;
