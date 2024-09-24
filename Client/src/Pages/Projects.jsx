import { BiCode } from "react-icons/bi";
import { MdOutlineOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import blogpostImg from "../assets/Blog.png";
import { useState } from "react";

const Projects = () => {
  const [categorietoggle, setCatetogerieToggle] = useState(false);

  const toggleDown = () => {
    setCatetogerieToggle((prev) => !prev);
  };

  const productData = [
    {
      img: "https://www.singlegrain.com/wp-content/uploads/2019/03/SG-The-4-Fundamentals-of-E-commerce-Website-Design.jpg",
      name: "ShoppingKart - MERN Stack E-commerce App",
      description:
        " E-commerce admin dashboard with dynamic product management,secure APIs, and data visualization tools.",
      techstack: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "SCSS"],
    },
    {
      img: blogpostImg,
      name: "Bloggers - A Blog Post Website",
      description:
        "Blog contributors and contributors to the website  that  publishes the latest information about the website",
      techstack: ["ReactJS", "TailwindCSS", "Redux Toolkit", " Appwrite"],
    },
  ];

  return (
    <div className="  w-full h-full flex flex-col justify-start gap-4 items-center">
      <div className=" w-2/3  h-56 flex flex-col justify-center  ">
        <div className=" w-full h-2/4 flex flex-col justify-around   ">
          <button className=" w-36 py-1 bg-bgColor3 text-whiteColor font-fontf2 rounded-lg">
            Showcase
          </button>
          <h1 className=" font-semibold text-3xl">Explore my projects</h1>
          <p className=" font-fontf3">
            I love to build stuff. Here are some projects that i have worked on.
          </p>
        </div>
      </div>
      <div className=" flex w-full max-w-3xl justify-end">
        <button
          className=" border-2 border-borderColor2 rounded-md bg-bgColor2 flex w-44 py-1 px-1 items-center justify-around"
          onClick={toggleDown}
        >
          <span>All Projects</span>
          <BiCode />
        </button>
        {categorietoggle ? (
          <div className=" border-2 border-gray-200 rounded-md h-full relative">
            <ul className="absolute top-12 right-11 bg-white w-48">
              <li className=" border-b border-black p-2 hover:bg-gray-200 cursor-pointer ">
                All Project
              </li>
              <li className=" border-b border-black p-2 hover:bg-gray-200 cursor-pointer ">
                Frontend Projects
              </li>
              <li className=" border-b border-black p-2 hover:bg-gray-200 cursor-pointer ">
                Backend Projects
              </li>
              <li className=" border-b border-black p-2 hover:bg-gray-200 cursor-pointer ">
                Fullstack Projects
              </li>
            </ul>
          </div>
        ) : null}
      </div>
      <div className=" w-full max-w-3xl  grid grid-cols-2 gap-4 mb-6">
        {productData.map((product, index) => (
          <div
            key={index}
            className=" border border-gray-100 rounded-xl w-92 h-max bg-bgColor3"
          >
            <img
              className=" w-full h-44 pt-4 pl-4  rounded-tl-3xl"
              src={product.img}
              alt=""
            />
            <div className=" pl-2 h-40 bg-white rounded-b-xl   flex items-start justify-around flex-col text-black">
              <h1 className=" text-lg font-semibold font-fontf3">
                {product.name}
              </h1>
              <p className=" text-sm font-fontf3 font-medium opacity-80">
                {product.description}
              </p>
              <ul className=" flex   w-full items-center gap-2 ">
                {product.techstack.map((li, i) => (
                  <li
                    key={i}
                    className=" bg-gray-50 text-blackColor rounded-md text-xs font-medium flex items-center  border px-1 border-gray-300 "
                  >
                    {li}
                  </li>
                ))}
              </ul>
              <div className=" flex gap-1 ">
                <button className=" flex items-center justify-around  w-20  px-2 py-1 bg-bgColor3 text-white rounded-md   ">
                  <MdOutlineOpenInNew />
                  <span className=" text-xs font-semibold ">Website</span>
                </button>
                <button className=" flex items-center justify-around  w-20  px-2 py-1 bg-bgColor3 text-white rounded-md     ">
                  <FaGithub />
                  <span className=" text-xs font-semibold ">Source</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
