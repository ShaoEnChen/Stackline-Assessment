import ProductOverview from "./overview";
import ProductTags from "./tags";

export default function ProductDetails() {
  return (
    <div className="flex flex-col w-1/5 h-full mr-6 py-6 bg-white" aria-label="Product Details">
      <ProductOverview />
      <ProductTags />
    </div>
  );
}