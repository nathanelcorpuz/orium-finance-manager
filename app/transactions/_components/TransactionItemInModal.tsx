import { Transaction } from "@/utils/types";
import { format } from "date-fns";

export default function TransactionItemInModal({ tx }: { tx: Transaction }) {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="flex flex-col w-full p-2 border border-blue-200 rounded-lg">
          <p className="text-gray-400 text-[10px]">Name</p>
          <p>{tx.name}</p>
        </div>
        <div className="flex flex-col w-full p-2 border border-blue-200 rounded-lg">
          <p className="text-gray-400 text-[10px]">Amount</p>
          <p>{tx.amount}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col w-full p-2 border border-blue-200 rounded-lg">
          <p className="text-gray-400 text-[10px]">Due Date</p>
          <p>{format(tx.date, "MMM dd, yyyy")}</p>
        </div>
        <div className="flex flex-col w-full p-2 border border-blue-200 rounded-lg">
          <p className="text-gray-400 text-[10px]">Category</p>
          <p>{tx.category}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 p-2 border border-blue-200 rounded-lg">
        <p className="text-gray-400 text-[10px]">Account</p>
        <p>{tx.account}</p>
      </div>
      <div className="flex flex-col p-2 border border-blue-200 rounded-lg">
        <p className="text-gray-400 text-[10px]">Notes</p>
        <p>{tx.notes}</p>
      </div>
    </div>
  );
}
