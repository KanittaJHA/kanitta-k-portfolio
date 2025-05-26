import React from "react";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import ProjectImage from "../../assets/images/project.jpg";

const MyProjects = () => {
  return (
    <section className="mt-[62px] mb-[30px] w-full max-w-[1440px] px-[64px] mx-auto grid grid-cols-2 gap-8 max-[601px]:grid-cols-1 max-[701px]:px-[32px]">
      <img
        src={ProjectImage}
        alt=""
        className="w-full h-[460px] object-cover rounded-[16px] rounded-tr-[64px] rounded-bl-[200px] max-[601px]:rounded-bl-[150px] max-[821px]:h-[350px] max-[601px]:h-[300px] max-[401px]:h-[260px]"
      />

      <div className="z-4 flex flex-col items-center justify-center">
        {[
          "E-commerce Websites",
          "Business Websites",
          "Information Websites",
          "Dashboards",
          "Animations and Games",
          "Full Stack Projects",
        ].map((project, index) => (
          <React.Fragment key={index}>
            <div className="text-gray-600 flex justify-center w-full h-[75px] max-[821px]:h-[57px] uppercase cursor-pointer hover:text-[#FF9EAD] ease-in-out transition-all duration-400">
              <div className="ml-2 max-[821px]:text-[14px]">
                <p>{String(index + 1).padStart(2, "0")}.</p>
              </div>
              <div className="relative flex items-center w-full justify-center text-[20px] max-[821px]:text-[16px] hover:text-[40px] max-[821px]:hover:text-[24px] hover:text-[#FF9EAD]">
                <p>{project}</p>
                <RiArrowRightDoubleLine className="absolute right-0" />
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-600"></div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
