import { GoWorkflow } from "react-icons/go";
import { PiGreaterThanBold } from "react-icons/pi";
import theInternsImg from "../assets/theinternslogo.png";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <div className="bg-bgMain w-full h-screen flex flex-col justify-start gap-4 items-center">
      <div className=" w-2/3  h-56 flex flex-col justify-center  ">
        <div className=" w-full h-2/4 flex flex-col justify-around   ">
          <button className=" w-36 py-1 bg-buttonBg text-buttonText rounded-lg">
            My Experience
          </button>
          <h1 className=" font-semibold text-headlineColor text-3xl ">
            Check out my jurney
          </h1>
          <p className=" text-paragraphColor">
            Look out my jurney and the companies that I have worked with.
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-2 px-6 w-2/3 gap-4">
        <div className=" w-full h-max">
          <div className=" flex flex-col h-56 justify-around py-4">
            <div className=" flex items-center gap-2 font-semibold text-lg border-b border-borderColor p-2 ">
              <span className=" border p-1 rounded-full border-borderColor">
                {" "}
                <img className=" w-8" src={theInternsImg} alt="logo" />
              </span>
              <h1 className=" text-headlineColor"> TheInterns</h1>
            </div>
            <div>
              <p className=" text-base text-paragraphColor">
                I had the privilege of working at TheInterns. The company is
                focused on providing courses, placement assistance, and
                interview preparation in various fields. Their mission is to
                empower learners with the skills they need to succeed in their
                careers.
              </p>
            </div>
            <div className=" text-sm font-semibold flex items-center py-2  ">
              <Link
                to="https://theinterns.org.in/"
                target="_blank"
                className="hover:border-b-2 border-black "
              >
                Checkout website to learn more{" "}
              </Link>{" "}
              <PiGreaterThanBold />
            </div>
          </div>
        </div>
        <div className="  w-full h-max ">
          <div className=" flex h-60 py-4">
            <span className=" my-4 p-2 h-max  border border-borderColor  rounded-full text-headlineColor   ">
              <GoWorkflow />
            </span>
            <div className=" pl-2 flex flex-col text-headlineColor  justify-around ">
              <div>
                <h1 className=" font-semibold text-lg">
                  Frontend Developer Intern
                </h1>
                <p className=" text-sm font-semibold opacity-80">
                  April, 2024 - June, 2024{" "}
                  <span className=" opacity-70">(3 months)</span>
                </p>
              </div>
              <div>
                <p className=" text-sm text-paragraphColor ">
                  Accomplished web developer proficient in HTML, CSS,
                  JavaScript, and React.js, specializing in innovative and
                  responsive web applications. Collaborated with a team to
                  develop an edtech company website focused on course sales,
                  including creating sign-up and sign-in pages for user
                  authentication
                </p>
              </div>
              <div>
                <ul className=" flex   w-full items-center gap-2 ">
                  <li className=" bg-buttonBg text-buttonText rounded-md text-xs font-medium flex items-center  border py-1 px-2  ">
                    HTML
                  </li>
                  <li className=" bg-buttonBg text-buttonText rounded-md text-xs font-medium flex items-center  border py-1 px-2  ">
                    CSS
                  </li>
                  <li className=" bg-buttonBg text-buttonText rounded-md text-xs font-medium flex items-center  border py-1 px-2  ">
                    Javascript
                  </li>
                  <li className=" bg-buttonBg text-buttonText rounded-md text-xs font-medium flex items-center  border py-1 px-2  ">
                    ReactJS
                  </li>
                  <li className=" bg-buttonBg text-buttonText rounded-md text-xs font-medium flex items-center  border py-1 px-2  ">
                    Tailwind
                  </li>
                  <li className=" bg-buttonBg text-buttonText rounded-md text-xs font-medium flex items-center  border py-1 px-2  ">
                    Git / GitHub
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
