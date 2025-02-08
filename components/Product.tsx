import Image from "next/image";
import Discount from "./Discount";
import { CiHeart } from "react-icons/ci";
function Product() {
  return (
    <div className="w-[250px] h-[250px] bg-gray-200 flex items-center justify-center relative">
      <Image
        src="/controller.png"
        className="w-[150px] h-[150px] object-cover"
        width={150}
        height={150}
        alt="controller"
      />
      <div className="absolute top-[10px] left-[10px]">
        <Discount amount={40} />
      </div>
      <CiHeart
        size={30}
        className="absolute bg-white rounded-full p-1 right-[10px] top-[10px]"
      />
    </div>
  );
}

export default Product;
