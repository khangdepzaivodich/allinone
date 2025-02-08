import Title from "./Title";
import Product from "./Product";
function Body() {
  return (
    <div className="px-24 mt-24">
      <Title title="Today's" />
      <div className="font-bold text-4xl mb-5">Flash Sales</div>
      <Product />
    </div>
  );
}

export default Body;
