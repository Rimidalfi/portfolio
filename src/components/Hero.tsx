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
    <div className="flex flex-col md:flex-row justify-center bg-gradient-to-bl w-full from-cyan-400 to-indigo-600">
      <div className="flex flex-col justify-center text-white hero3">
        <h1 className="font-montserrat-bold hero1">{heroData?.heroTitle}</h1>
        <h3 className="font-montserrat-italic md:pb-4">
          {heroData?.heroSubtitle}
        </h3>
        <p className="">{heroData?.heroText}</p>
      </div>
      <div className="img self-center lg:pr-40 md:f-full">
        <img className="" src={heroData?.heroImage} alt="" />
      </div>
    </div>
  );
}
