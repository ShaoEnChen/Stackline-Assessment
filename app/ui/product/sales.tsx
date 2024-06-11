import { ProductData } from "@/app/lib/definitions";
import SalesGraph from "@/app/ui/sales/graph";
import SalesTable from "@/app/ui/sales/table";

export default function ProductSales({ data }: {
  data: ProductData;
}) {
  return (
    <div className="flex flex-col w-full h-full" aria-label="Product Sales">
      <SalesGraph sales={data.sales} />
      <SalesTable sales={data.sales} />
    </div>
  );
}