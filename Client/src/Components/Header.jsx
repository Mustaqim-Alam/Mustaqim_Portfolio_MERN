import { Link } from "react-router-dom";
import { PiGithubLogoLight } from "react-icons/pi";
const Header = () => {
  return (
    <header className=" bg-slate-400 py-3 w-screen ">
      <nav className="flex justify-around  ">
        <div className=" bg-color gap-2">
          <Link to="/">Mustaqim</Link>
        </div>
        <div>
          <ul className="flex">
            <li>
              <Link
                to="/project"
                className="inline-bock px-6 py-2 duration-200 rounded-full"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link to="/experience"  className="inline-bock px-6 py-2 duration-200 rounded-full">Experience</Link>
            </li>
            <li>
              <Link to="/article"  className="inline-bock px-6 py-2 duration-200 rounded-full">Article</Link>
            </li>
            <li>
              <Link to="/contact"  className="inline-bock px-6 py-2 duration-200 rounded-full">Connect with me</Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <PiGithubLogoLight />
          <button>GitHub</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
