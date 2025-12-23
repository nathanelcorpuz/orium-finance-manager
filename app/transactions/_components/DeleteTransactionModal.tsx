import TransactionItemInModal from "./TransactionItemInModal";
import { Dispatch, SetStateAction } from "react";
import { Transaction } from "@/utils/types";
import Modal from "@/app/_components/Modal";

export default function DeleteTransactionModal({
  setModalOpen,
  tx,
}: {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  tx: Transaction;
}) {
  return (
    <Modal title="Delete this transaction?" open={setModalOpen}>
      <p className="p-4 text-red-500 font-bold">This action cannot be undone</p>
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
          }}
        >
          Submit
        </button>
      </div>
    </Modal>
  );
}
