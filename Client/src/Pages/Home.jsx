import { AiOutlineCloudDownload } from "react-icons/ai";
import { PiHandshakeThin } from "react-icons/pi";
import { SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";
import About from "../Components/About";

const Home = () => {
  return (
    <div className="bg-bgMain  w-full h-full  flex flex-col justify-center items-center  ">
      <article className=" h-[400px]  w-full  py-20  flex flex-col items-center justify-center">
        <div className=" w-2/3   flex flex-col items-center gap-3 justify-center">
          <div>
            <h1 className=" text-3xl font-fontf1 font-bold text-headlineColor">
              Hey there, Im Mustaqim{" "}
            </h1>
          </div>
          <div className=" flex justify-center">
            <p className="font-fontf1  w-2/3 text-center text-xl text-paragraphColor">
              MERN stack developer from India with a passion for building
              innovative web applications. constantly upskilling myself in the
              ever-evolving field of software development. Currently, Im
              actively seeking exciting opportunities to contribute my expertise
              and collaborate with talented teams.
            </p>
          </div>
          <div className=" flex gap-8 mt-7">
            <Link className=" bg-buttonBg text-buttonText text-medium flex items-center w-36 justify-center gap-2 rounded-xl font-fontf1 py-1.5">
              {" "}
              <PiHandshakeThin /> Get in touch
            </Link>
            <Link
              to="http://linkedin.com/in/md-mustaqim-alam"
              target="_blank"
              className=" text-buttonText  text-medium flex items-center w-36 justify-center gap-2 rounded-xl font-fontf1 py-1.5 border-solid border-2 border-borderColor"
            >
              <SiLinkedin /> Visit LinkedIn
            </Link>
            <button className=" bg-buttonBg text-buttonText text-medium flex items-center w-36 justify-center gap-2 rounded-xl font-fontf1 py-1.5">
              <AiOutlineCloudDownload /> Download CV
            </button>
          </div>{" "}
        </div>
      </article>
      <About />
    </div>
  );
};

export default Home;
