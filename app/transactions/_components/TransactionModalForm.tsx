import { Transaction } from "@/utils/types";
import { format } from "date-fns";

export default function TransactionModalForm({ tx }: { tx: Transaction }) {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="p-2 flex flex-col  bg-blue-100 rounded-lg">
        <p>New Name</p>
        <input
          className="border-b py-1 focus:outline-none w-full"
          defaultValue={tx.name}
        />
      </div>
      <div className="p-2 flex flex-col  bg-blue-100 rounded-lg">
        <p>New Amount</p>
        <input
          className="border-b py-1 focus:outline-none w-full"
          defaultValue={tx.amount}
        />
      </div>
      <div className="p-2 flex flex-col  bg-blue-100 rounded-lg">
        <p>New Due Date</p>
        <input
          className="border-b py-1 focus:outline-none w-full"
          defaultValue={format(tx.date, "yyyy-MM-dd")}
          type="date"
        />
      </div>
      <div className="p-2 flex flex-col  bg-blue-100 rounded-lg">
        <p>New Notes</p>
        <textarea
          className="border-b py-1 focus:outline-none w-full"
          defaultValue={tx.notes}
        />
      </div>
    </div>
  );
}
