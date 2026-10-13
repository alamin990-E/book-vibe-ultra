import Image from "next/image";
import React from "react";
import BannerImage from "@/assets/pngwing 1.png";

const Banner = () => {
  return (
   
    <section className=" my-13 container mx-auto ">
      <div className=" grid grid-cols-1 md:grid-cols-2  bg-slate-200 shadow-sm justify-between items-center  p-10 rounded-2xl md:p-15">

        {/* banner text and button */}
        <div className="justify-self-center text-center  md:text-start md:justify-self-start space-y-10 ">
          {/* Heading */}
          <h2 className="text-[30px] sm:text-[36px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-bold leading-[1.3]">
            Books to freshen up <br /> your bookshelf
          </h2>

          {/* Button */}
          <button className="btn text-[12px] sm:text-[14px] md:text-[16px] font-bold py-3 px-7 text-white rounded-2.5 border-none bg-[#23BE0A]">
            View The List
          </button>

        </div>
        {/* banner Image */}
        <div className="mx-auto md:mx-0 mt-15 md:mt-0 justify-self-end">
             <Image src={BannerImage} alt="BannerImage" loading="eager" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
