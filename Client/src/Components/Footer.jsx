import { GrGithub } from "react-icons/gr";
import { SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className=" flex justify-between h-14 px-4  items-center w-full border-t border-borderColor2 bg-bgColor2 text-blackColor ">
      <div className=" opacity-90 "> &copy; 2024 Md Mustaqim Alam</div>
      <div className=" flex gap-2 opacity-90">
        <Link
          target="_blank"
          to="https://github.com/Mustaqim-Alam"
          className="flex justify-around items-center rounded-md py-1 w-20 "
        >
          {" "}
          <GrGithub /> GitHub
        </Link>
        <Link
          to="http://linkedin.com/in/md-mustaqim-alam"
          target="_blank"
          className="flex justify-around items-center rounded-md py-1 w-20"
        >
          <SiLinkedin /> LinkedIn
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
