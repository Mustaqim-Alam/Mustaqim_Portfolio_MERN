import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="bg-bgColor2 w-full h-screen flex flex-col justify-start gap-4 items-center">
      <div className=" bg-red-600 w-2/3  h-56 flex flex-col justify-center  ">
        <div className=" w-full h-2/4 flex flex-col justify-around   ">
          <button className=" w-36 py-1 bg-bgColor3 text-whiteColor font-fontf2 rounded-lg">
            Contact me
          </button>
          <h1 className=" font-semibold text-3xl">Send me a message</h1>
          <p className=" font-fontf3">
            Have a question and just want to say hi? Drop me a message I will
            get back back to you soon.
          </p>
        </div>
      </div>
      <div className=" bg-green-300 grid grid-cols-2 px-6 w-2/3 gap-4">
        <div className=" bg-yellow-200 w-1/3">
          <img
            src="https://png.pngtree.com/png-clipart/20201225/ourmid/pngtree-man-waiting-for-someone-to-watch-the-time-original-hand-drawn-png-image_2618874.jpg"
            alt="my img"
          />
          <h1>MERN Stack Developer</h1>
          <div>
            <ul className=" flex">
              <li>
                {" "}
                <div className="group relative flex justify-center items-center">
                  <button>
                    <FiGithub className="w-8 h-8 hover:scale-125 duration-200 hover:stroke-blue-500" />
                  </button>
                  <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 scale-0 px-3 py-2 rounded-lg border border-gray-300 bg-white text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                    GitHub
                  </span>
                </div>
              </li>
              <li>
                {" "}
                <div className="group relative flex justify-center items-center">
                  <button>
                    <CiLinkedin className="w-8 h-8 hover:scale-125 duration-200 hover:stroke-blue-500" />
                  </button>
                  <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 scale-0 px-3 py-2 rounded-lg border border-gray-300 bg-white text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                    GitHub
                  </span>
                </div>
              </li>
              <li>
                {" "}
                <div className="group relative flex justify-center items-center">
                  <button>
                    <RiTwitterXLine className="w-8 h-8 hover:scale-125 duration-200 hover:stroke-blue-500" />
                  </button>
                  <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 scale-0 px-3 py-2 rounded-lg border border-gray-300 bg-white text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                    GitHub
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className=" bg-lime-200 w-full "></div>
      </div>
    </div>
  );
};

export default Contact;
