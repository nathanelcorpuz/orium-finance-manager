"use client";

import AccountItem from "./AccountItem";
import { useState } from "react";
import AccountItemModal from "./AccountItemModal";
import { Account } from "@/utils/types";

export default function AccountsSection({ accounts }: { accounts: Account[] }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState({} as Account);

  return (
    <div className="flex bg-blue-100 rounded-xl p-4 gap-8">
      <div className="flex flex-col border-r p-1 pr-8">
        <p>16,000</p>
        <p className="text-gray-500">Total balance</p>
      </div>
      <div className="flex gap-8">
        {accounts.map((account) => {
          return (
            <AccountItem
              key={account.id}
              account={account}
              setSelectedAccount={setSelectedAccount}
              setModalOpen={setModalOpen}
            />
          );
        })}
        {modalOpen && (
          <AccountItemModal
            setModalOpen={setModalOpen}
            account={selectedAccount}
          />
        )}
      </div>
    </div>
  );
}
