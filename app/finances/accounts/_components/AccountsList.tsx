"use client";

import { mockAccounts } from "@/utils/mockAccounts";
import { Account } from "@/utils/types";

export default function AccountsList({ accounts }: { accounts: Account[] }) {
  return (
    <div className="flex flex-col">
      {mockAccounts.map((account) => {
        return (
          <div
            key={account.id}
            className="py-4 px-1 flex gap-8 border-b border-b-gray-200 hover:bg-blue-200 cursor-pointer"
          >
            <p className="w-[20%] min-w-70">{account.name}</p>
            <p className="w-[20%] min-w-70">{account.amount}</p>
          </div>
        );
      })}
    </div>
  );
}
