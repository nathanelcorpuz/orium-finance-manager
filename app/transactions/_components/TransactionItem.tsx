import { Transaction } from "@/utils/types";
import { format } from "date-fns";
import { Dispatch, SetStateAction } from "react";

export default function TransactionItem({
  tx,
  setSelectedAccount,
  setModalOpen,
}: {
  tx: Transaction;
  setSelectedAccount: Dispatch<SetStateAction<Transaction>>;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      key={tx.id}
      className="flex border-b border-b-blue-100 p-0.5 rounded-sm hover:bg-blue-200 hover:cursor-pointer"
      onClick={() => {
        setSelectedAccount(tx);
        setModalOpen(true);
      }}
    >
      <p className="w-[20%]">{tx.name}</p>
      <p className="w-[20.5%]">{tx.amount}</p>
      <p className="w-[20.5%]">{format(tx.date, "MMM dd, yyyy")}</p>
      <p className="w-[20%]">{tx.category}</p>
    </div>
  );
}
