import Modal from "@/app/_components/Modal";
import { Account } from "@/utils/types";
import { X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export default function AccountItemModal({
  setModalOpen,
  account,
}: {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  account: Account;
}) {
  return (
    <Modal setModalOpen={setModalOpen}>
      <div className="flex justify-between p-4">
        <p className="text-lg">Edit balance</p>
        <button
          onClick={() => {
            setModalOpen(false);
          }}
        >
          <X size={22} />
        </button>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <input
          className="border-b py-1 focus:outline-none w-full"
          defaultValue={account.amount}
        />
        <p className="opacity-50">{account.name}</p>
      </div>
      <div className="flex justify-between p-4 gap-2">
        <button
          className="w-full p-2 border border-black rounded-lg cursor-pointer hover:bg-gray-200"
          onClick={() => {
            setModalOpen(false);
          }}
        >
          Cancel
        </button>
        <button
          className="w-full p-2 border border-black rounded-lg cursor-pointer hover:bg-gray-200"
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
