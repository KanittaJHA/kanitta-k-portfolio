import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  RiLightbulbFill,
  RiArrowRightSLine,
  RiTimer2Fill,
  RiServiceFill,
  RiSearchEyeFill,
  RiLineChartFill,
  RiShieldFlashFill,
  RiSeedlingFill,
  RiCalendarScheduleFill,
} from "react-icons/ri";

const items = [
  {
    icon: <RiLightbulbFill className="text-4xl" />,
    title: "Proactiveness",
    desc: "I act early—because readiness is a mindset, not timing.",
  },
  {
    icon: <RiTimer2Fill className="text-4xl" />,
    title: "Time Management",
    desc: "To me, time isn’t just to be managed — it’s to be valued.",
  },
  {
    icon: <RiServiceFill className="text-4xl" />,
    title: "Teamwork",
    desc: "Team-first. Clear. Committed. Flexible.",
  },
  {
    icon: <RiSearchEyeFill className="text-4xl" />,
    title: "Orientation to Details",
    desc: "Precision and focus fuel my drive for quality.",
  },
  {
    icon: <RiLineChartFill className="text-4xl" />,
    title: "Growth Mindset",
    desc: "I embrace challenges and learn continuously to improve.",
  },
  {
    icon: <RiShieldFlashFill className="text-4xl" />,
    title: "Persistence",
    desc: "I stay determined and keep pushing forward despite.",
  },
  {
    icon: <RiSeedlingFill className="text-4xl" />,
    title: "Personal Responsibility",
    desc: "I own my actions and outcomes, accountable for growth.",
  },
  {
    icon: <RiCalendarScheduleFill className="text-4xl" />,
    title: "Future Orientation",
    desc: "I plan ahead and stay focused on long-term goals.",
  },
];

const Bsms = () => {
  return (
    <section className="relative z-20 w-full h-[100px] max-w-[1440px] mx-auto px-[64px] mb-[62px] flex flex-col justify-center max-[701px]:px-[32px]">
      <div className="w-full overflow-hidden">
        <Swiper className="w-[2250px]" slidesPerView={7} loop={true}>
          {items.map((item, index) => (
            <SwiperSlide
              key={index}
              className="relative w-[310px] mt-8 mb-[1px]"
            >
              <div className="absolute top-0 left-0 flex items-center w-[310px] text-[#F5DCE0] uppercase font-extralight text-xl max-[601px]:text-[16px] border border-gray-600 px-3 py-2 rounded-[16px] bg-gray-500/10 hover:-rotate-6 origin-bottom-left transition-transform duration-200 cursor-pointer z-10">
                {item.icon}
                <div className="flex flex-col ml-2">
                  <p>{item.title}</p>
                  <p className="text-[12px]">{item.desc}</p>
                </div>
                <div className="bg-gray-800 rounded-full w-[25px] h-[25px] absolute right-4 flex items-center justify-center cursor-pointer hover:text-white hover:bg-[#FF9EAD] transition-all duration-100 ease-in">
                  <RiArrowRightSLine className="text-white" />
                </div>
              </div>
              <div className="w-[310px] h-[62px] bg-gray-600/10 rounded-[16px]" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Bsms;
