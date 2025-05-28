import React, { useState, useEffect } from "react";
import NavbarV2 from "../01-landing-page/header/NavbarV2";
import { RiGithubFill } from "react-icons/ri";
import ProjectsDateList from "../../utils/ProjectsDateList";
import { useLocation } from "react-router-dom";

const ProjectsComponent = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    scrollToTop();
  }, [location.pathname, location.search]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");

    if (categoryParam) {
      let initialCategory = decodeURIComponent(categoryParam);

      const categoryMap = {
        "E-commerce Websites": "E-commerce",
        "Business Websites": "Business",
        "Mini Projects": "Mini Projects",
        Dashboards: "Dashboards",
        "Animations and Games": "Animations and Games",
        "Full Stack Projects": "Full Stack Projects",
      };

      const mappedCategory = categoryMap[initialCategory] || initialCategory;

      const validCategories = [
        "All Projects",
        "E-commerce",
        "Business",
        "Mini Projects",
        "Dashboards",
        "Animations and Games",
        "Full Stack Projects",
      ];

      if (validCategories.includes(mappedCategory)) {
        setActiveCategory(mappedCategory);
      } else {
        setActiveCategory("All Projects");
      }
    } else {
      setActiveCategory("All Projects");
    }
  }, [location.search]);

  const filteredProjects =
    activeCategory === "All Projects"
      ? ProjectsDateList
      : ProjectsDateList.filter(
          (project) =>
            project.category.toLowerCase() === activeCategory.toLowerCase()
        );

  const headingText =
    activeCategory === "All Projects"
      ? "Launch into my space of projects"
      : `Launch into my ${activeCategory} projects`;

  return (
    <div className="w-full h-auto max-w-[1440px] px-[64px] mx-auto max-[701px]:px-[32px] mb-[64px]">
      <NavbarV2 />

      <div className="flex flex-col w-full justify-center items-center">
        <h2 className="text-[#F5DCE0] text-6xl uppercase mt-[140px] text-center max-[769px]:text-5xl max-[401px]:text-[38px]">
          {headingText}
        </h2>
        <p className="text-[#F5DCE0] text-[20px] uppercase font-light w-[50%] text-center max-[1025px]:w-[70%] max-[769px]:w-[80%] max-[601px]:w-[100%] max-[769px]:text-[16px] max-[401px]:text-[14px]">
          Dive into an interstellar voyage of design and development, where
          creativity fuels rockets and every project tells a story written among
          the stars.
        </p>
      </div>

      <div className="mt-16">
        <ul className="flex flex-wrap items-center w-full justify-center gap-6 text-[#F5DCE0] uppercase text-sm max-[426px]:text-[12px] max-[601px]:gap-4">
          {[
            "All Projects",
            "E-commerce",
            "Business",
            "Mini Projects",
            "Dashboards",
            "Animations and Games",
            "Full Stack Projects",
          ].map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveCategory(item)}
              className={`flex items-center px-6 py-1.5 rounded-full transition-all duration-300 ease-in-out cursor-pointer
                ${
                  activeCategory.toLowerCase() === item.toLowerCase()
                    ? "bg-[#FF9EAD] text-white"
                    : "bg-[#F5DCE0] text-gray-900 hover:bg-[#FF9EAD] hover:text-white"
                }`}
            >
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-16 max-[1128px]:grid-cols-3 max-[830px]:grid-cols-2 max-[550px]:grid-cols-1">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="w-full bg-neutral-950/80 rounded-[16px] p-5 hover:bg-[#FF9EAD] hover:text-gray-900 transition-all duration-200 ease-in-out cursor-pointer group"
          >
            <div className="flex justify-between items-center mb-4 h-[18px]">
              <p className="text-white uppercase text-sm">{project.category}</p>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiGithubFill className="text-[18px] text-white cursor-pointer" />
              </a>
            </div>
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </a>

            <div className="flex justify-between items-center mt-4">
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-[16px]">
                  <p className="text-white uppercase text-sm cursor-pointer hover:text-gray-950">
                    {project.title}
                  </p>
                </div>
              </a>

              <div className="flex gap-1.5 items-center">
                {project.icons.map((icon, iconIndex) => (
                  <img
                    key={iconIndex}
                    className="w-[17px] h-[17px]"
                    src={icon}
                    alt=""
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsComponent;
