import { mockAccounts } from "@/utils/mockAccounts";
import { mockTransactions } from "@/utils/mockTransactions";
import { format } from "date-fns";
import { Filter, Search } from "lucide-react";
import AccountItem from "./_components/AccountItem";

export default function Transactions() {
  return (
    <main className="gap-4 flex flex-col p-4 pl-0 text-sm">
      <div className="flex h-20 gap-4">
        <div className="flex w-full bg-blue-100 rounded-xl p-4 gap-8">
          <div className="flex flex-col border-r p-1 pr-8">
            <p>16,000</p>
            <p className="text-xs text-gray-500">Total balance</p>
          </div>
          <div className="flex gap-8">
            {mockAccounts.map((account) => {
              return <AccountItem key={account.id} account={account} />;
            })}
          </div>
        </div>
        <div className="flex gap-1 items-center w-[25%] bg-blue-100 rounded-xl p-4">
          <button>
            <Search size={18} />
          </button>
          <input className="border-b p-1 focus:outline-none w-full" />
        </div>
      </div>
      <div className="flex flex-col justify-between h-180 bg-blue-100 p-4 rounded-xl">
        <div className="flex gap-2 justify-between">
          <p className="text-sm text-gray-500">Future Transactions</p>
          <div className="flex items-center">
            <button className="flex items-center w-8 h-8 hover:bg-blue-200 hover:cursor-pointer rounded-full justify-center">
              <Filter size={16} />
            </button>
          </div>
        </div>
        <div className="flex p-2">
          <p className="w-[20%]">Name</p>
          <p className="w-[20%]">Amount</p>
          <p className="w-[20%]">Due Date</p>
          <p className="w-[20%]">Category</p>
        </div>
        <div className="flex flex-col h-160 overflow-y-scroll bg-blue-50 p-2 rounded-lg">
          {mockTransactions.map((tx) => {
            return (
              <div key={tx.id} className="flex border-b border-b-blue-100">
                <p className="w-[20%]">{tx.name}</p>
                <p className="w-[20%]">{tx.amount}</p>
                <p className="w-[20%]">{tx.category}</p>
                <p className="w-[20%]">{format(tx.date, "MMM dd, yyyy")}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
