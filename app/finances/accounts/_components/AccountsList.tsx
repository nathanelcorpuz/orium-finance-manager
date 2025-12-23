"use client";

import { Account } from "@/utils/types";
import { useState } from "react";
import EditModal from "./EditModal";

export default function AccountsList({ accounts }: { accounts: Account[] }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState({} as Account);
  return (
    <div className="flex flex-col">
      {accounts.map((account) => {
        return (
          <div
            key={account.id}
            className="py-4 px-1 flex gap-8 border-b border-b-gray-200 hover:bg-blue-200 cursor-pointer"
            onClick={() => {
              setModalOpen(true);
              setSelected(account);
            }}
          >
            <p className="w-[20%] min-w-70">{account.name}</p>
            <p className="w-[20%] min-w-70">{account.amount}</p>
          </div>
        );
      })}
      {modalOpen && (
        <EditModal setModalOpen={setModalOpen} selected={selected} />
      )}
    </div>
  );
}
