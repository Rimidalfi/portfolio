import { useState, useEffect } from "react";
import getHero from "../utils/getHero";

export interface HeroData {
  heroTitle?: string;
  heroText?: string;
  heroImage?: string;
  heroSubtitle?: string;
}

export default function Hero() {
  const [heroData, setHeroData] = useState<HeroData>();
  useEffect(() => {
    getHero(setHeroData);
  }, []);

  return (
    <div className="grid bg-red-500">
      <div className="col-start-1 row-start-1 z-10 p-8 sm:p-20 md:p-30 xl:p-30 text-white">
        <h1 className="font-montserrat-bold text-xl sm:text-4xl md:text-5xl xl:text-6xl">
          {heroData?.heroTitle}
        </h1>
        <div className=" text-sm sm:text-lg md:text-2xl xl:text-3xl w-auto sm:w-3/6 md:w-3/6 lg:w-3/6 xl:w-3/6">
          <h3 className=" pt-0 sm:pt-1 md:pt-2">{heroData?.heroSubtitle}</h3>
          <p className="w-5/6 sm:w-auto pb-4 pt-1 sm:pt-2 md:pt-4 font-montserrat-italic">
            {heroData?.heroText}
          </p>
        </div>
      </div>
      <div className="w-auto inset-0 col-start-1 row-start-1 md:col-start-2 md:row-start-1 bg-lime-600 z-0 overflow-hidden">
        <img className="" src={heroData?.heroImage} alt="" />
      </div>
    </div>
  );
}
