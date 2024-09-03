import { BiCode } from "react-icons/bi";
import { MdOutlineOpenInNew } from "react-icons/md";
import { PiGithubLogoLight } from "react-icons/pi";

const Projects = () => {
  const productData = [
    {
      img: "https://www.singlegrain.com/wp-content/uploads/2019/03/SG-The-4-Fundamentals-of-E-commerce-Website-Design.jpg",
      name: "ShoppingKart - MERN Stack E-commerce App",
      description:
        " E-commerce admin dashboard with dynamic product management,secure APIs, and data visualization tools.",
      techstack: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "SCSS"],
    },
  ];

  return (
    <div className=" bg-bgColor2 flex justify-center">
      <div className=" flex flex-col max-w-5xl px-8  items-center ">
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
        <div className=" w-full  grid grid-cols-2 gap-4 px-8 py-4">
          {productData.map((product) => {
            <div>
              <img src={product.img} alt="" />
              <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <ul>
                  {product.techstack.map((li, i) => {
                    <li key={i}>{li}</li>;
                  })}
                </ul>
              </div>
            </div>;
          })}
          <div className=" border-2 border-borderColor2 rounded-xl w-92 h-max bg-lime-300">
            <img
              className=" w-full h-44 pt-4 pl-4  rounded-tl-3xl"
              src="https://www.singlegrain.com/wp-content/uploads/2019/03/SG-The-4-Fundamentals-of-E-commerce-Website-Design.jpg"
              alt=""
            />
            <div className=" pl-2 h-40 bg-white rounded-b-xl   flex items-start justify-around flex-col text-black">
              <h1 className=" text-lg font-semibold font-fontf3">
                ShoppingKart - MERN Stack E-commerce App
              </h1>
              <p className=" text-sm font-fontf3">
                E-commerce admin dashboard with dynamic product management,
                secure APIs, and data visualization tools.
              </p>
              <ul className=" flex   w-full items-center gap-2 ">
                <li className=" bg-gray-100 text-blackColor rounded-md text-sm  flex items-center  border px-1 border-gray ">
                  ReactJS
                </li>
                <li className=" bg-gray-100 text-blackColor rounded-md text-sm font-semibold flex items-center  border px-1 border-gray ">
                  NodeJS
                </li>
                <li className=" bg-gray-100 text-blackColor rounded-md text-sm font-semibold flex items-center  border px-1 border-gray ">
                  MongoDB
                </li>
                <li className=" bg-gray-100 text-blackColor rounded-md text-sm font-semibold flex items-center  border px-1 border-gray ">
                  ExpressJs
                </li>
                <li className=" bg-gray-100 text-blackColor rounded-md text-sm font-semibold flex items-center  border px-1 border-gray ">
                  Sass
                </li>
                <li className=" bg-gray-100 text-blackColor rounded-md text-sm font-semibold flex items-center  border px-1 border-gray ">
                  Redux
                </li>
              </ul>
              <div className=" flex gap-2 ">
                <button className=" flex py-1 px-4 bg-black text-white rounded-lg gap-2 items-center ">
                  <MdOutlineOpenInNew />
                  <span>Website</span>
                </button>
                <button className=" flex py-1 px-4 bg-black text-white rounded-lg gap-2 items-center ">
                  <PiGithubLogoLight />
                  <span>Source</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
