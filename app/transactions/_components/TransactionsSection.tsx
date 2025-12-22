"use client";

import { Transaction } from "@/utils/types";
import { format } from "date-fns";
import { Filter } from "lucide-react";
import { useState } from "react";
import TransactionItem from "./TransactionItem";
import TransactionItemModal from "./TransactionItemModal";
import FilterSection from "./FilterSection";
import FilterModal from "./FilterModal";
import DeleteTransactionModal from "./DeleteTransactionModal";
import EditTransactionModal from "./EditTransactionModal";
import CompleteTransactionModal from "./CompleteTransactionModal";

export default function TransactionsSection({
  transactions,
}: {
  transactions: Transaction[];
}) {
  const [transactionModalOpen, setTransactionModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(
    {} as Transaction
  );

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [completeModalOpen, setCompleteModalOpen] = useState(false);

  const [filterModalOpen, setFilterModalOpen] = useState(false);

  return (
    <div className="flex flex-col justify-between h-180 bg-blue-100 p-4 rounded-xl">
      <div className="flex gap-2 justify-between">
        <p className="text-sm text-gray-500">Future Transactions</p>
        <FilterSection setModalOpen={setFilterModalOpen} />
        {filterModalOpen && <FilterModal setModalOpen={setFilterModalOpen} />}
      </div>
      <div className="flex p-2">
        <p className="w-[20%]">Name</p>
        <p className="w-[20%]">Amount</p>
        <p className="w-[20%]">Due Date</p>
        <p className="w-[20%]">Category</p>
      </div>
      <div className="flex flex-col h-160 overflow-y-scroll bg-blue-50 p-2 rounded-lg">
        {transactions.map((tx) => {
          return (
            <TransactionItem
              key={tx.id}
              tx={tx}
              setSelectedAccount={setSelectedTransaction}
              setModalOpen={setTransactionModalOpen}
            />
          );
        })}
        {transactionModalOpen && (
          <TransactionItemModal
            setModalOpen={setTransactionModalOpen}
            setDeleteModalOpen={setDeleteModalOpen}
            setEditModalOpen={setEditModalOpen}
            setCompleteModalOpen={setCompleteModalOpen}
            tx={selectedTransaction}
          />
        )}

        {deleteModalOpen && (
          <DeleteTransactionModal
            setModalOpen={setDeleteModalOpen}
            tx={selectedTransaction}
          />
        )}
        {editModalOpen && (
          <EditTransactionModal
            setModalOpen={setEditModalOpen}
            tx={selectedTransaction}
          />
        )}
        {completeModalOpen && (
          <CompleteTransactionModal
            setModalOpen={setCompleteModalOpen}
            tx={selectedTransaction}
          />
        )}
      </div>
    </div>
  );
}
