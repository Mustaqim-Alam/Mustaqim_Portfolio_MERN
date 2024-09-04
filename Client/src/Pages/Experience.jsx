import { GoWorkflow } from "react-icons/go";

const Experience = () => {
  return (
    <div className=" w-full h-full flex flex-col justify-start gap-4 items-center">
      <div className=" w-2/3 bg-amber-300 h-52 flex flex-col justify-center  ">
        <div className=" w-full h-2/4 flex flex-col justify-around  bg-gray-300   ">
         
            <button className=" w-36 py-1 bg-bgColor3 text-whiteColor font-fontf2 rounded-lg">
              My Experience
            </button>
            <h1 className=" font-semibold text-3xl">Check out my jurney</h1>
            <p className=" font-fontf3">
              Look out my jurney and the companies that I have worked with.
            </p>
         
        </div>
      </div>
      <div className=" grid grid-cols-2 w-2/3 px-4 gap-4">
        <div className=" bg-emerald-300 w-full">Hello</div>
        <div className=" bg-bgColor2 w-full h-max ">
          <div className=" flex h-60 py-4">
            <span className=" my-4 p-2 h-max  border border-gray-300 rounded-full text-gray-500   ">
              <GoWorkflow  />
            </span>
            <div className=" pl-2 flex flex-col  justify-around ">
              <div>
                <h1 className=" font-semibold text-lg">Frontend Developer</h1>
                <p className=" text-sm font-semibold opacity-80">
                  April, 2024 - June, 2024 <span className=" opacity-70">(3 months)</span>
                </p>
              </div>
              <div>
                <p className=" text-sm font-fontf1 ">
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
                  <li className=" bg-gray-50 text-blackColor rounded-md text-xs font-medium flex items-center  border px-1 border-gray-300 ">HTML</li>
                  <li className=" bg-gray-50 text-blackColor rounded-md text-xs font-medium flex items-center  border px-1 border-gray-300 ">CSS</li>
                  <li className=" bg-gray-50 text-blackColor rounded-md text-xs font-medium flex items-center  border px-1 border-gray-300 ">Javascript</li>
                  <li className=" bg-gray-50 text-blackColor rounded-md text-xs font-medium flex items-center  border px-1 border-gray-300 ">ReactJS</li>
                  <li className=" bg-gray-50 text-blackColor rounded-md text-xs font-medium flex items-center  border px-1 border-gray-300 ">Tailwind</li>
                  <li className=" bg-gray-50 text-blackColor rounded-md text-xs font-medium flex items-center  border px-1 border-gray-300 ">Git / GitHub</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" flex h-60 py-4">
            <span className=" my-4 p-2 h-max  border border-gray-300 rounded-full text-gray-500  text-lg ">
              <GoWorkflow  />
            </span>
            <div className=" pl-2 flex flex-col  justify-around ">
              <div>
                <h1 className=" font-semibold text-lg">Frontend Developer</h1>
                <p className=" text-sm font-semibold opacity-80">
                  April, 2024 - June, 2024 <span className=" opacity-70">(3 months)</span>
                </p>
              </div>
              <div>
                <p className=" text-sm font-fontf1 ">
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
                  <li className=" bg-gray-50 text-blackColor rounded-md text-xs font-medium flex items-center  border px-1 border-gray-300 ">HTML</li>
                  <li className=" bg-gray-50 text-blackColor rounded-md text-xs font-medium flex items-center  border px-1 border-gray-300 ">CSS</li>
                  <li className=" bg-gray-50 text-blackColor rounded-md text-xs font-medium flex items-center  border px-1 border-gray-300 ">Javascript</li>
                  <li className=" bg-gray-50 text-blackColor rounded-md text-xs font-medium flex items-center  border px-1 border-gray-300 ">ReactJS</li>
                  <li className=" bg-gray-50 text-blackColor rounded-md text-xs font-medium flex items-center  border px-1 border-gray-300 ">Tailwind</li>
                  <li className=" bg-gray-50 text-blackColor rounded-md text-xs font-medium flex items-center  border px-1 border-gray-300 ">Git / GitHub</li>
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
