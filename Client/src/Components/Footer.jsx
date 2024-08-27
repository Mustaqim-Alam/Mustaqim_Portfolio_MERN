import { GrGithub } from "react-icons/gr";
import { TiSocialLinkedin } from "react-icons/ti";
const Footer = () => {
  return (
    <footer className=" flex">
      <div> &copy; 2024 Md Mustaqim Alam</div>
      <div>
        <button>
          {" "}
          <GrGithub /> GitHub
        </button>
        <button>
          <TiSocialLinkedin /> LinkedIn
        </button>
      </div>
    </footer>
  );
};

export default Footer;
