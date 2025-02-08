function Discount({ amount }: { amount: number }) {
  return (
    <div className="px-3 py-1 bg-red-500 text-center rounded-[4px] text-white text-sm ">
      -{amount}%
    </div>
  );
}

export default Discount;
