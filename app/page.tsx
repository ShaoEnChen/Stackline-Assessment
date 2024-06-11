"use client";
import { useState, useEffect } from "react";
import Navbar from "@/app/ui/nav/navbar";
import ProductDetails from "@/app/ui/product/details";
import ProductSales from "@/app/ui/product/sales";
import { fetchProductData } from "@/app/lib/data";

export default function Home() {
  const [productId, setProductId] = useState("B007TIE0GQ")
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetchProductData(productId)
      .then((data) => setProductData(data));
  }, [productId]);

  if (!productData) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <p>Product data is loading</p>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-row justify-between mt-48 px-6">
        <ProductDetails data={productData} />
        <ProductSales data={productData} />
      </div>
    </main>
  );
}
