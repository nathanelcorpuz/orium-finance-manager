"use client";

import { Account } from "@/utils/types";
import { useState } from "react";
import AccountItemModal from "./AccountItemModal";

export default function AccountItem({ account }: { account: Account }) {
  const [modalShown, setModalShown] = useState(false);
  return (
    <div onClick={() => setModalShown(true)}>
      <div className="flex flex-col p-1 rounded-lg hover:bg-blue-200 hover:cursor-pointer">
        <p>{account.amount}</p>
        <p className="text-xs text-gray-500">{account.name}</p>
      </div>
      {modalShown && <AccountItemModal setModalShown={setModalShown} />}
    </div>
  );
}
