import { BiCode } from "react-icons/bi";
import { MdOutlineOpenInNew } from "react-icons/md";
import { PiGithubLogoLight } from "react-icons/pi";

const Projects = () => {
  return (
    <div className="bg-red-300 flex justify-center">
      <div className=" flex flex-col max-w-5xl px-8  items-center bg-green-300">
        <div className=" h-52 w-full flex justify-start items-start px-4 pt-10   gap-2 max ">
          <div>
            <button className=" py-1 px-4 bg-bgColor1 text-whiteColor font-fontf2 rounded-lg">
              Showcase
            </button>
            <h1 className=" font-semibold text-3xl">Explore my projects</h1>
            <p className=" font-fontf3">
              I love to build stuff. Here are some projects that i have worked
              on.
            </p>
          </div>
        </div>
        <div className=" flex w-full justify-end">
          <button className=" border-2 border-borderColor2 rounded-md bg-bgColor2 flex w-44 py-1 px-1 items-center justify-around">
            <span>All Projects</span>
            <BiCode />
          </button>
        </div>
        <div className=" w-full bg-red-300 grid grid-cols-2 gap-4 px-8">
          <div className=" border-2 border-borderColor2 rounded-xl w-full bg-lime-300">
            <img
              className=" w-full pt-4 pl-4  rounded-tl-3xl"
              src="https://www.singlegrain.com/wp-content/uploads/2019/03/SG-The-4-Fundamentals-of-E-commerce-Website-Design.jpg"
              alt=""
            />
            <div className=" p-1 bg-bgColor1 text-whiteColor">
              <h1 className=" text-xl font-fontf3">ShoppingKart - MERN Stack E-commerce App</h1>
              <p className=" text-sm font-fontf3">
                E-commerce admin dashboard with dynamic product management,
                secure APIs, and data visualization tools.
              </p>
              <ul>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>ExpressJs</li>
                <li>Sass</li>
                <li>Redux</li>
              </ul>
              <div>
                <button>
                  <MdOutlineOpenInNew />
                  <span>Website</span>
                </button>
                <button>
                  <PiGithubLogoLight />
                  <span>Source</span>
                </button>
              </div>
            </div>
          </div>
          <div className=" border-2 border-borderColor2 rounded-xl w-full bg-lime-300">
            <img
              className=" w-full"
              src="https://www.singlegrain.com/wp-content/uploads/2019/03/SG-The-4-Fundamentals-of-E-commerce-Website-Design.jpg"
              alt=""
            />
            <h1>ShoppingKart - MERN Stack E-commerce App</h1>
            <p>
              E-commerce admin dashboard with dynamic product management, secure
              APIs, and data visualization tools.
            </p>
            <ul>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>ExpressJs</li>
              <li>Sass</li>
              <li>Redux</li>
            </ul>
            <div>
              <button>
                <MdOutlineOpenInNew />
                <span>Website</span>
              </button>
              <button>
                <PiGithubLogoLight />
                <span>Source</span>
              </button>
            </div>
          </div>
          <div className=" border-2 mb-2 border-borderColor2 rounded-xl w-full bg-white">
            <img
              className=" w-full"
              src="https://www.singlegrain.com/wp-content/uploads/2019/03/SG-The-4-Fundamentals-of-E-commerce-Website-Design.jpg"
              alt=""
            />
            <h1>ShoppingKart - MERN Stack E-commerce App</h1>
            <p>
              E-commerce admin dashboard with dynamic product management, secure
              APIs, and data visualization tools.
            </p>
            <ul className=" flex justify-around px-2">
              <li className=" bg-gray-200 text-blackColor rounded-md text-sm font-semibold flex items-center  border-2 border-black ">ReactJS</li>
              <li className=" bg-gray-200 text-blackColor rounded-md py-1 px-2">NodeJS</li>
              <li className=" bg-gray-200 text-blackColor rounded-md py-1 px-2">MongoDB</li>
              <li className=" bg-gray-200 text-blackColor rounded-md py-1 px-2">ExpressJs</li>
              <li className=" bg-gray-200 text-blackColor rounded-md py-1 px-2">Sass</li>
              <li className=" bg-gray-200 text-blackColor rounded-md py-1 px-2">Redux</li>
            </ul>
            <div className=" flex gap-2 m-4"  >
              <button className=" flex py-2 px-4 bg-black text-white rounded-lg gap-2 items-center ">
                <MdOutlineOpenInNew />
                <span>Website</span>
              </button>
              <button className=" flex py-2 px-4 bg-black text-white rounded-lg gap-2 items-center ">
                <PiGithubLogoLight />
                <span>Source</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;