import { Transaction } from "@/utils/types";
import { format } from "date-fns";

export default function TransactionItemInModal({ tx }: { tx: Transaction }) {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col">
        <p>Name</p>
        <p>{tx.name}</p>
      </div>
      <div className="flex flex-col">
        <p>Amount</p>
        <p>{tx.amount}</p>
      </div>
      <div className="flex flex-col">
        <p>Due Date</p>
        <p>{format(tx.date, "MMM dd, yyyy")}</p>
      </div>
      <div className="flex flex-col">
        <p>Category</p>
        <p>{tx.category}</p>
      </div>
      <div className="flex flex-col">
        <p>Notes</p>
        <p>{tx.notes}</p>
      </div>
    </div>
  );
}
