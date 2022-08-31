import * as React from "react";
import { Link } from "react-router-dom";
import textHighlight from "../../assets/texthighlight.svg";
import checkIcon from "../../assets/check-icon.svg";
import h1 from "../../assets/profile-1.png";
import h2 from "../../assets/profile-2.png";
import h3 from "../../assets/profile-3.png";
import hImage from "../../assets/07.png";
import "./HeroSection.css";
import Blob from "./Blob";
import CircleDot from "../particles/circleDot";
import StarIcon from "../particles/start";
import EightDot from "../particles/EightDot";
import ReactIcon from "../particles/ReactIcon";
import FigmaIcon from "../particles/FigmaIcon";
import AngularIcon from "../particles/AngularIcon";
import HComment from "./HComment";

const HeroSection = () => {
  return (
    <div className="h-fit mx-2 py-10 lg:p-auto  lg:h-[800px] relative flex items-center w-screen">
      <div className="container mx-auto">
        {/* text section */}
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 lg:col-span-6">
            <div className="py-10 h-fit">
              {/*  heading text */}
              <div className="relative mb-4 z-10">
                <h1 className="z-100 text-3xl md:text-5xl lg:text-5xl xl:text-[64px] font-bold leading-tight mb-2 text-[#363E3E]">
                  Limitless Learning at your fingertips
                </h1>
                <img
                  src={textHighlight}
                  alt=""
                  className="absolute -z-10 h-8 left-2 bottom-0 translate-x-16 md:h-14 md:-bottom-1 md:-left-1.5 md:translate-x-0 lg:left-1 lg:-bottom-1.5 lg:translate-x-28 xl:left-28 xl:h-16 xl:bottom-0 xl:translate-x-32 2xl:left-3 2xl:bottom-2 2xl:translate-x-36 2xl:h-16"
                />
              </div>

              {/* sub text */}
              <p className=" text-sm  md:text-base xl:text-lg block mr-10 mb-6">
                Online learning and teaching marketplace with 5K+ courses {"& "}
                10M students. Taught by experts to help you acquire new skills.
              </p>

              {/* list view */}

              <ul className="flex items-center">
                <li className="flex items-center mr-3">
                  <img src={checkIcon} alt="" className="w-3 md:w-5" />
                  <span className="block ml-1 md:ml-1.5 whitespace-nowrap text-[11px] md:text-sm">
                    Learn from experts
                  </span>
                </li>

                <li className="flex items-center mr-3">
                  <img src={checkIcon} alt="" className="w-3 md:w-5" />
                  <span className="block ml-1 md:ml-1.5 whitespace-nowrap text-[11px] md:text-sm">
                    Get Certificate
                  </span>
                </li>

                <li className="flex items-center mr-3">
                  <img src={checkIcon} alt="" className="w-3 md:w-5" />
                  <span className="block ml-1 md:ml-1.5 whitespace-nowrap text-[11px] md:text-sm">
                    Job Opportunities
                  </span>
                </li>
              </ul>

              <div className="flex items-center mt-10">
                {/* button */}
                <Link
                  to="/register-now"
                  className="btn block w-fit h-btn text-xs whitespace-nowrap py-1.5 px-3 md:text-sm md:py-1.5 md:px-4 lg:py-2 lg:px-5 xl:py-3 xl:px-6 xl:text-base rounded-lg"
                >
                  Register Now →
                </Link>

                <div className="flex items-center px-3">
                  <div className="flex items-center">
                    <div className=" rounded-full w-14 h-14 border-4 border-white/80">
                      <img
                        src={h1}
                        alt=""
                        className="w-full h-full rounded-full object-fill p-0"
                      />
                    </div>
                    <div className="-translate-x-8 rounded-full w-14 h-14 border-4 border-white/80">
                      <img
                        src={h2}
                        alt=""
                        className="w-full h-full rounded-full object-fill"
                      />
                    </div>
                    <div className="-translate-x-16 rounded-full w-14 h-14 border-4 border-white/80">
                      <img
                        src={h3}
                        alt=""
                        className="w-full h-full rounded-full object-fill"
                      />
                    </div>
                  </div>

                  <div className="-translate-x-14">
                    <h1 className="text-[#328383]">20K+</h1>
                    <span className="text-[#505656] font-medium text-sm">
                      Active Students
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right section for images */}
          <div className="col-span-12 lg:col-span-6">
            <div className="relative flex items-center justify-center h-fit py-20 my-10 lg:my-0 w-full">
              <div className="hero-image z-10 bg-inherit">
                <img src={hImage} alt="" />
                <Blob />
              </div>

              <HComment />

              {/* particles */}
              <ReactIcon />
              <FigmaIcon />
              <AngularIcon />
            </div>
          </div>
        </div>
      </div>

      {/* hero section  particle */}
      <CircleDot className="h-circle-dot -z-10" data-index="0" />
      <CircleDot className="h-circle-dot -z-10" data-index="1" />
      <CircleDot className="h-circle-dot -z-10" data-index="2" />
      <CircleDot className="h-circle-dot -z-10" data-index="3" />
      <CircleDot className="h-circle-dot -z-10" data-index="4" />
      <CircleDot className="h-circle-dot -z-10" data-index="5" />

      <StarIcon
        className="h-star-icon -z-10 invisible lg:visible"
        data-index="0"
      />
      <StarIcon className="h-star-icon -z-10" data-index="1" />
      <StarIcon className="h-star-icon -z-10" data-index="2" />
      <StarIcon className="h-star-icon -z-10" data-index="3" />
      <StarIcon className="h-star-icon -z-10" data-index="4" />

      <EightDot className="h-eight-dot -z-10" data-index="0" />
      <EightDot className="h-eight-dot -z-10" data-index="1" />
      <EightDot className="h-eight-dot -z-10" data-index="2" />
      <EightDot className="h-eight-dot -z-10" data-index="3" />
    </div>
  );
};

export default HeroSection;
