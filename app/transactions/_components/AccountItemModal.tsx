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
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
      <div
        className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-[0.8] z-2"
        onClick={() => {
          setModalOpen(false);
        }}
      ></div>
      <div className="w-100 bg-white z-4">
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
        <div className="flex justify-between p-4">
          <button
            className="p-2 border border-black rounded-lg cursor-pointer hover:bg-gray-200"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            Cancel
          </button>
          <button
            className="p-2 border border-black rounded-lg cursor-pointer hover:bg-gray-200"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
