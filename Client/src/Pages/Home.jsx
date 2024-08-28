import { PiHandshakeThin } from "react-icons/pi";
import { SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";
import About from "../Components/About";

const Home = () => {
  return (
    <div>
      <article className=" h-screen bg-bgColor2 w-screen flex flex-col items-center justify-center">
        <div className=" w-2/3  flex flex-col items-center gap-3 justify-center">
          <div>
            <h1 className=" text-3xl font-fontf3 font-bold">
              Hey there, I'm Mustaqim{" "}
            </h1>
          </div>
          <div className=" flex justify-center">
            <p className="font-fontf1 font-semibold w-2/3 opacity-75 text-xl">
              <strong>MERN stack developer</strong> from India with a passion
              for building innovative web applications.{" "}
              <strong>constantly upskilling myself</strong> in the ever-evolving
              field of software development.{" "}
              <strong>
                Currently, I'm actively seeking exciting opportunities
              </strong>{" "}
              to contribute my expertise and collaborate with talented teams.
            </p>
          </div>
          <div className=" flex gap-8">
            <Link className=" bg-bgColor1 text-whiteColor text-medium flex items-center w-36 justify-center gap-2 rounded-xl font-fontf1 py-1.5">
              {" "}
              <PiHandshakeThin /> Get in touch
            </Link>
            <Link
              to="http://linkedin.com/in/md-mustaqim-alam"
              target="_blank"
              className=" text-blackColor  text-medium flex items-center w-36 justify-center gap-2 rounded-xl font-fontf1 py-1.5 border-solid border-2 border-borderColor2"
            >
              <SiLinkedin /> Visit LinkedIn
            </Link>
          </div>{" "}
        </div>
      </article>
      <About/>
    </div>
  );
};

export default Home;
