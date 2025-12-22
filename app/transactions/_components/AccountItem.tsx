"use client";

import { Account } from "@/utils/types";
import { Dispatch, SetStateAction, useState } from "react";

export default function AccountItem({
  account,
  setSelectedAccount,
  setModalOpen,
}: {
  account: Account;
  setSelectedAccount: Dispatch<SetStateAction<Account>>;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      onClick={() => {
        setSelectedAccount(account);
        setModalOpen(true);
      }}
    >
      <div className="flex flex-col p-1 rounded-lg hover:bg-blue-200 hover:cursor-pointer">
        <p>{account.amount}</p>
        <p className="text-xs text-gray-500">{account.name}</p>
      </div>
    </div>
  );
}
