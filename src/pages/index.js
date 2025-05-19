import { Search } from "@/component/search";
import { Sun } from "@/component/sun";
import { Luna } from "@/component/lunas";
import { User } from "@/component/users";
import { Pin } from "@/component/ping";
import { Heart } from "@/component/heart";
import { Last } from "@/component/hom";
import { Pinal } from "@/component/pin";
import { Right } from "@/component/right";
import { Left } from "@/component/left";
import { useEffect, useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("Mongolia");

  const inter = (e) => setCity(e.target.value);

  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}`
      );

      const data = await response.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    //
    //
    //niiit dev

    <div className="flex ">
      {/* tsagaan nuur */}

      <div className=" bg-[#ffffff]  h-screen relative flex flex-1 items-center justify-center ">
        <div className="flex-col mb-[50px]">
          {/* search heseg */}

          <div className="flex w-150  rounded-[80px] shadow-lg mb-20 ">
            <div className="p-5">
              <Search />
            </div>
            <input
              onChange={inter}
              id="myInput"
              className="w-full h-17 py-4 pl-10 pr-6 rounded-[80px] text-[32px]  text-black  "
              type="text"
              placeholder="search"
            />
            <div className="pt-3 ">
              <button
                onClick={getWeather}
                className="text-black bg-emerald-300 border p-2  w-14  rounded-[20px]  "
              >
                {" "}
                add
              </button>
            </div>
          </div>

          {/* location nuur */}

          <div className="z-20 w-113 h-190 relative rounded-[50px] overflow-hidden shadow-lg bg-white/75 ml-45 ">
            <div class="space-y-12 px-10 py-14 backdrop-blur-md ">
              {/* date and ulaanbaatar */}

              <div className="flex justify-between ">
                <div>
                  <p className="text-gray-400">{weather.location?.localtime}</p>
                  <h1 className="text-black text-5xl">
                    {weather.location?.name}
                  </h1>
                </div>
                <div>
                  <Pinal />
                </div>
              </div>

              {/* icon */}

              <div className="pl-7">
                <Sun />
              </div>
              <div className="px-12">
                <div className="text-transparent bg-clip-text font-extrabold text-[80px] -mt-10 bg-gradient-to-b from-black to-white">
                  {weather.forecast?.forecastday[0]?.day?.maxtemp_c}°C
                </div>
                <p className="font-extrabold mb-12 h-6 text-[#777cce]">
                  {weather.forecast?.forecastday[0]?.day?.condition?.text}
                </p>
                <div className="flex items-center justify-between">
                  <p>
                    <Last />
                  </p>
                  <p>
                    <Pin />
                  </p>
                  <p>
                    <Heart />
                  </p>
                  <p>
                    {" "}
                    <User />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* circle */}

      <div className="relative inset-0 z-10 flex items-center justify-center">
        <div className="absolute border border-gray-300 w-[140px] h-[140px] rounded-full"></div>
        <div className="absolute border border-gray-300 w-[340px] h-[340px] rounded-full"></div>
        <div className="absolute border border-gray-300 w-[540px] h-[540px] rounded-full"></div>
        <div className="absolute border border-gray-300 w-[940px] h-[940px] rounded-full"></div>
        <div className=" absolute border  border-gray-300 flex items-center justify-center w-[140px] h-[140px] bg-[#Ffffff] rounded-full ">
          <div className="flex gap-3">
            <div className="flex">
              <span>
                <Left />
              </span>
            </div>
            <div className="flex">
              <span>
                <Right />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* har nuur */}

      <div className="h-screen relative flex flex-1 items-center justify-center bg-[#0f141e] ">
        <div className="z-20 w-113 h-190 rounded-[50px] mt-[100px] overflow-hidden shadow-lg bg-[#111827]/75 backdrop-blur-md">
          {" "}
          <div class="space-y-12 px-10 py-14 backdrop-blur-md  ">
            {/* date and ulaanbaatar */}
            <div className="flex justify-between ">
              <div>
                <p className="text-gray-400">{weather.location?.localtime}</p>
                <h1 className=" text-5xl"> {weather.location?.name}</h1>
              </div>
              <div className="">
                <Pinal />
              </div>
            </div>
            {/* icon */}
            <div className="pl-7">
              <Luna />
            </div>
            <div className="px-12">
              <div className="text-transparent bg-clip-text font-extrabold text-[80px] -mt-10 bg-gradient-to-b to-white">
                {weather.forecast?.forecastday[0]?.day?.mintemp_c}°C
              </div>
              <p className="font-extrabold mb-12 h-6 text-orange-300">
                {weather.forecast?.forecastday[0]?.day?.condition?.text}
              </p>
              <div className="flex items-center justify-between">
                <p>
                  <Last />
                </p>
                <p>
                  <Pin />
                </p>
                <p>
                  <Heart />
                </p>
                <p>
                  <User />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
