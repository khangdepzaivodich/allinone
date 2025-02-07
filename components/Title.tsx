function Title({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 ">
      <div className="bg-red-500 w-4 h-12 rounded-[5px]"></div>
      <div className="font-extrabold text-red-500 ">{title}</div>
    </div>
  );
}

export default Title;
