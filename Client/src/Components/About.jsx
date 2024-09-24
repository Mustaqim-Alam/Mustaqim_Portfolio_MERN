import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="  w-full flex justify-center">
      <div className=" w-2/5  py-20  flex flex-col gap-4 items-center justify-center ">
        <div className="flex flex-col items-start    ">
          <h1 className=" font-fontf2 font-bold text-xl text-headlineColor ">
            About
          </h1>
          <p className=" text-start font-fontf3 text-paragraphColor">
            I graduated in 2023 with Bachelors of Computer Applications from{" "}
            <Link to="https://mmhapu.ac.in/" target="_blank">
              <u className=" text-blue-400">
                Maulana Mazharul Haque Arabic And Persian University
              </u>
            </Link>{" "}
            , I like to explore tech and build stuff. I have been developing web
            apps using the MERN stack (MongoDB, Express.js, React.js, Node.js)
            for a while now. Continuously exploring and learning new
            technologies, I am driven to build impactful solutions and expand my
            skills in software development. in Computer Science and Engineering
            from
          </p>
        </div>

        <div className="flex flex-col items-start   ">
          <h1 className=" font-bold text-xl text-paragraphColor ">Education</h1>
          <div className="flex flex-col gap-4 w-full mt-2">
            <div className=" flex justify-between w-full gap-6 ">
              <div className=" flex  items-center gap-2">
                <img
                  className="h-8 rounded-3xl "
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Moulana_Mazharul_Haque_Arabic_and_Persian_University_logo.jpg/220px-Moulana_Mazharul_Haque_Arabic_and_Persian_University_logo.jpg"
                  alt="UniImg"
                />
                <div>
                  <h2 className=" font-semibold ">
                    Maulana Mazharul Haque Arabic And Persian University, Patna
                  </h2>
                  <p className=" font-fontf3 text-start text-sm opacity-85">
                    Bachelor of Computer Applications (BCA)
                  </p>
                </div>
              </div>
              <p className=" self-start text-blue-500">2020 - 2023</p>
            </div>
            <div className=" flex justify-between w-full ">
              <div className=" flex  items-center gap-2">
                <img
                  className="h-8 rounded-3xl "
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahQLnOo_b6EH_OoBkvrwvRvuU9ow5_mtDew&s"
                  alt="UniImg"
                />
                <div className=" flex flex-col">
                  <h2 className=" font-semibold self-start ">BSEB, Patna</h2>
                  <p className=" font-fontf3 text-start text-sm opacity-85">
                    Senior Secondary ( Physics, Chemistry, Mathematics)
                  </p>
                </div>
              </div>
              <p className=" self-start text-blue-500">2019 - 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
