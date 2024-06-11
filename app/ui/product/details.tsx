import { ProductData } from "@/app/lib/definitions";
import ProductOverview from "./overview";
import ProductTags from "./tags";

export default function ProductDetails({ data }: ProductData) {
  return (
    <div className="flex flex-col w-1/5 h-full mr-6 py-6 bg-white" aria-label="Product Details">
      <ProductOverview
        imagePath={data.image}
        productTitle={data.title}
        productSubtitle={data.subtitle} />
      <ProductTags tags={data.tags} />
    </div>
  );
}