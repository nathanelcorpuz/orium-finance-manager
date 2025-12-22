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
      <div className="flex flex-col gap-1 p-2 bg-blue-100 rounded-lg">
        <label htmlFor="account">Account</label>
        <select
          name="account"
          id="account"
          className="p-1 border border-blue-300 rounded-lg"
        >
          <option value="bdo">BDO</option>
          <option value="chinabank">Chinabank</option>
          <option value="ub">Unionbank</option>
          <option value="gcash">GCash</option>
          <option value="maya">Maya</option>
        </select>
      </div>
      <div className="p-2 flex flex-col  bg-blue-100 rounded-lg">
        <p>New Notes</p>
        <textarea
          className="border-b py-1 focus:outline-none w-full"
          rows={5}
          defaultValue={tx.notes}
        />
      </div>
    </div>
  );
}
