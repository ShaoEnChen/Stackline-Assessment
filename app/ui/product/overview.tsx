import Image from "next/image";

export default function ProductOverview({
  imagePath,
  productTitle,
  productSubtitle
}: {
  imagePath: string;
  productTitle: string;
  productSubtitle: string;
}) {
  return (
    <div className="flex flex-col px-12 py-6">
      <div className="flex justify-center items-center mb-6">
        <Image
          src={imagePath}
          alt={productTitle}
          width={300}
          height={193}
          priority
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center text-2xl py-2">
          {productTitle}
        </h2>
        <p className="text-center text-slate-400 text-sm py-2">
          {productSubtitle}
        </p>
      </div>
    </div>
  );
}