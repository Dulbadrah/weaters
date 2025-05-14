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
import { useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=47.921230&lon=106.918556&inits=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
  const cityUrl = `https://www.api-ninjas.com/api/city?name=tokyo`;
  const getWeather = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    //niiit dev
    <div className="flex ">
      {/* tsagaan nuur */}
      <div className=" bg-[#ffffff]  h-screen relative flex flex-1 items-center justify-center ">
        <div className="flex-col ">
          {/* search heseg */}
          <div className="flex w-150  rounded-[80px] shadow-lg">
            <div className="p-5">
              <Search />
            </div>
            <input
              className="w-full h-17 py-4 pl-10 pr-6 rounded-[80px] text-[32px]  text-black  "
              type="text"
              placeholder="search"
            />
            <div>
              <button
                onClick={getWeather}
                className="text-black border p-2 w-fit"
              >
                {" "}
                setWeather
              </button>
            </div>
          </div>
          {/* location nuur */}
          <div className="z-20 w-113 h-190 rounded-[50px] overflow-hidden shadow-lg bg-white/75 ml-45 ">
            <div class="space-y-12 px-10 py-14 backdrop-blur-md ">
              {/* date and ulaanbaatar */}
              <div className="flex justify-between ">
                <div>
                  <p className="text-gray-400">{weather.id}</p>
                  <h1 className="text-black text-5xl">{weather.name}</h1>
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
                  {weather.id}
                </div>
                <p className="font-extrabold mb-12 h-6 text-[#777cce]">sunny</p>
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

      {/* circle */}
      <div className=" flex absolute top-1/2 left-1/2 -translate-x-1/2  border rounded-full ">
        <div className="flex items-center justify-center w-[140px] h-[140px] gap-x-4">
          <div>
            <Left />
          </div>
          <div>
            <Right />
          </div>
        </div>
      </div>

      {/* har nuur */}
      <div className="h-screen relative flex flex-1 items-center justify-center bg-[#0f141e] ">
        <div className="z-20 w-103 h-190  rounded-[50px] overflow-hidden shadow-lg bg-[#111827]/75 backdrop-blur-md">
          {" "}
          <div class="space-y-12 px-10 py-14 backdrop-blur-lg ">
            {/* date and ulaanbaatar */}
            <div className="flex justify-between ">
              <div>
                <p className="text-gray-400">date</p>
                <h1 className=" text-5xl">UlaanBaatar</h1>
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
              <div className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b to-white">
                15.1
              </div>
              <p className="font-extrabold mb-12 h-6 text-orange-300">sunny</p>
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
