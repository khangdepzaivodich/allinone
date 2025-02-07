import Sidebar from "./Sidebar";
import Image from "next/image";

function Hero() {
  const img = ["/public/img1"];
  return (
    <div className="flex">
      <Sidebar />
      <Image
        src="/img1.jpg"
        width={892}
        height={344}
        alt="Iphone 16"
        className="w-[1000px] h-[420px] object-cover object-[40%_20%] ml-8 mt-8"
      />
    </div>
  );
}

export default Hero;
