import { Sale } from "@/app/lib/definitions";
import { formatPrice, formatDate } from "@/app/lib/data";
import DropdownIcon from "@/app/ui/nav/dropdown-icon";

export default function SalesTable({ sales }: {
  sales: Sale[];
}) {
  return (
    <div className="w-full h-full bg-white" aria-label="Sales Table">
      <table className="w-full table-auto border-collapse text-center">
        <thead>
          <tr className="text-slate-600">
            <th className="p-8 font-normal">
              WEEK ENDING
              <DropdownIcon />
            </th>
            <th className="p-8 font-normal">
              RETAIL SALES
              <DropdownIcon />
            </th>
            <th className="p-8 font-normal">
              WHOLESALE SALES
              <DropdownIcon />
            </th>
            <th className="p-8 font-normal">
              UNITS SOLD
              <DropdownIcon />
            </th>
            <th className="p-8 font-normal">
              RETAILER MARGIN
              <DropdownIcon />
            </th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale: Sale) => {
            return (
              <tr key={sale.weekEnding} className="border-y-2 border-y-slate-100 text-slate-400">
                <td className="p-8">{formatDate(sale.weekEnding)}</td>
                <td className="p-8">{formatPrice(sale.retailSales)}</td>
                <td className="p-8">{formatPrice(sale.wholesaleSales)}</td>
                <td className="p-8">{sale.unitsSold}</td>
                <td className="p-8">{formatPrice(sale.retailerMargin)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}