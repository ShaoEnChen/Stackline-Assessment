import SalesGraph from "@/app/ui/sales/graph";
import SalesTable from "@/app/ui/sales/table";

export default function ProductSales({ tags }) {
  return (
    <div className="flex flex-col w-full h-screen" aria-label="Product Sales">
      <SalesGraph />
      <SalesTable />
    </div>
  );
}