import Image from "next/image";

export default function ProductOverview() {
  return (
    <div className="flex flex-col px-12 py-6">
      <div className="flex justify-center items-center mb-6">
        <Image
          src="/images/B007TIE0GQ.webp"
          alt="NutriBullet NBR-1201 Product Image"
          width={300}
          height={193}
          priority
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center text-2xl py-2">
          Shark Ninja
        </h2>
        <p className="text-center text-slate-300 py-2">
          Magic Bullet NutriBullet 12-Piece High-Speed Blender/Mixer System
        </p>
      </div>
    </div>
  );
}