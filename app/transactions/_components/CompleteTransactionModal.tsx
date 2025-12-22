import { X } from "lucide-react";
import TransactionItemInModal from "./TransactionItemInModal";
import { Dispatch, SetStateAction } from "react";
import { Transaction } from "@/utils/types";
import TransactionModalForm from "./TransactionModalForm";
import Modal from "@/app/_components/Modal";

export default function CompleteTransactionModal({
  setModalOpen,
  tx,
}: {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  tx: Transaction;
}) {
  return (
    <Modal setModalOpen={setModalOpen}>
      <div className="flex justify-between p-4">
        <p className="text-lg">Complete this transaction?</p>
        <button
          onClick={() => {
            setModalOpen(false);
          }}
        >
          <X size={22} />
        </button>
      </div>
      <p className="p-4 text-red-500 font-bold">This action cannot be undone</p>
      <TransactionItemInModal tx={tx} />
      <TransactionModalForm tx={tx} />
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
