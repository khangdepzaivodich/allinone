"use client";
import Sidebar from "./Sidebar";
import Image from "next/image";
import { useState, useEffect } from "react";

function Hero() {
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
  ];
  const [imgNum, setImgNum] = useState(0);

  const changeImage = (num: number) => {
    setImgNum(num);
  };
  useEffect(() => {
    const id = setInterval(() => {
      setImgNum((prevNum) => {
        if (prevNum === 4) return 0;
        return prevNum + 1;
      });
    }, 3000);
    return () => clearInterval(id);
  });
  return (
    <div className="flex">
      <Sidebar />
      <span className="relative">
        <div className="relative w-[1000px] h-[420px] ml-8 mt-8">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              width={892}
              height={344}
              alt="Iphone 16"
              className={`absolute inset-0 w-full h-full object-cover object-[40%_20%] transition-all duration-500 ${
                imgNum === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <span className="flex gap-4 absolute right-1/2 translate-x-28 -bottom-0 -translate-y-5">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-5 h-5 rounded-full border-2 border-white cursor-pointer transition-all ${
                imgNum === index ? "bg-red-500 scale-110" : "bg-transparent"
              }`}
              onClick={() => changeImage(index)}
            />
          ))}
        </span>
      </span>
    </div>
  );
}

export default Hero;
