"use client";

import { Transaction } from "@/utils/types";
import { Dispatch, SetStateAction, useState } from "react";
import TransactionItemInModal from "./TransactionItemInModal";
import Modal from "@/app/_components/Modal";

export default function TransactionItemModal({
  setModalOpen,
  setDeleteModalOpen,
  setEditModalOpen,
  setCompleteModalOpen,
  tx,
}: {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setDeleteModalOpen: Dispatch<SetStateAction<boolean>>;
  setEditModalOpen: Dispatch<SetStateAction<boolean>>;
  setCompleteModalOpen: Dispatch<SetStateAction<boolean>>;
  tx: Transaction;
}) {
  return (
    <Modal title="Select Action" open={setModalOpen}>
      <TransactionItemInModal tx={tx} />
      <div className="flex justify-between p-4 gap-2">
        <button
          className="p-2 w-full border border-black rounded-lg cursor-pointer hover:bg-gray-200"
          onClick={() => {
            setModalOpen(false);
          }}
        >
          Cancel
        </button>
        <button
          className="p-2 w-full border border-black rounded-lg cursor-pointer hover:bg-gray-200"
          onClick={() => {
            setModalOpen(false);
            setDeleteModalOpen(true);
          }}
        >
          Delete
        </button>
        <button
          className="p-2 w-full border border-black rounded-lg cursor-pointer hover:bg-gray-200"
          onClick={() => {
            setModalOpen(false);
            setEditModalOpen(true);
          }}
        >
          Edit
        </button>
        <button
          className="p-2 w-full border border-black rounded-lg cursor-pointer hover:bg-gray-200"
          onClick={() => {
            setModalOpen(false);
            setCompleteModalOpen(true);
          }}
        >
          Complete
        </button>
      </div>
    </Modal>
  );
}
