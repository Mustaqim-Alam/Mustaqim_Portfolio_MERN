import { FiGithub, FiMessageSquare } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";

const Contact = () => {
  return (
    <div className="bg-bgColor2 w-full h-screen flex flex-col justify-start gap-4 items-center">
      <div className="  w-2/3  h-56 flex flex-col justify-center  ">
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
      <div className="   grid grid-cols-2 px-6 w-2/3 gap-4 ">
        <div className="  w-1/3">
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
        <div className="   w-full  ">
          <form action="" className=" flex flex-col p-4 gap-4 ">
            <div className="flex flex-col ">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className=" p-2 rounded-md bg-gray-300 border border-borderColor3 placeholder:john doe"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="yourname@email.com"
                className=" p-2 rounded-md bg-gray-300 border border-borderColor3 placeholder:john doe"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="msg">Message</label>
              <textarea
                id="msg"
                name="message"
                placeholder="Write your message here..."
                className=" p-2 rounded-md bg-gray-300 border border-borderColor3 placeholder:john doe"
              ></textarea>
            </div>

            <div className="flex justify-around  w-full gap-4 mt-4">
              {/* <!-- Send Message Button --> */}
              <button
                type="submit"
                className="bg-gray-700 justify-center w-full text-white py-2 px-4 rounded-lg gap-2 flex items-center"
              >
                <FiMessageSquare />
                Send Me Message
              </button>

              {/* <!-- LinkedIn Button --> */}

              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                className="bg-gray-700 w-full  text-white py-2 px-4 rounded-lg gap-2 flex items-center justify-center"
              >
                <SlSocialLinkedin />
                LinkedIn
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
