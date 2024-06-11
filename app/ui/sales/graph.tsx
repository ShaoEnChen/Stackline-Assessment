import { Sale } from "@/app/lib/definitions";

export default function SalesGraph({ sales }: {
  sales: Sale[];
}) {
  return (
    <div className="w-full mb-24 p-6 bg-white" aria-label="Sales Graph">
      Sales Graph
    </div>
  );
}