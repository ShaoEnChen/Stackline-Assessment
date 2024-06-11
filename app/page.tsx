import Navbar from "@/app/ui/nav/navbar";
import ProductDetails from "@/app/ui/product/details";
import ProductSales from "@/app/ui/product/sales";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-row h-screen justify-between mt-48 px-6">
        <ProductDetails />
        <ProductSales />
      </div>
    </main>
  );
}
