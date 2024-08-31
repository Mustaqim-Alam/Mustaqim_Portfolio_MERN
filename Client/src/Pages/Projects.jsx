import { BiCode } from "react-icons/bi";
import { MdOutlineOpenInNew } from "react-icons/md";
import { PiGithubLogoLight } from "react-icons/pi";

const Projects = () => {
  return (
    <div className="bg-red-300 flex justify-center">
      <div className=" flex flex-col max-w-6xl px-4  items-center bg-green-300">

     
      <div className=" bg-slate-400  max ">
        <div>
          <button>Showcase</button>
          <h1>Explore my projects</h1>
          <p>
            I love to build stuff. Here are some projects that i have worked on.
          </p>
        </div>
      </div>
      <div>
        <button>
          <span>All Projects</span>
          <BiCode />
        </button>
      </div>
      <div>
        <div>
          <img
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
      </div>
      <div>
        <img
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
    </div>
    </div>
  );
};

export default Projects;
