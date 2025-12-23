"use client";

import Modal from "@/app/_components/Modal";
import { Account } from "@/utils/types";
import { Dispatch, SetStateAction, useState } from "react";
import Selected from "./Selected";
import DeleteView from "./DeleteView";

export default function EditModal({
  setModalOpen,
  selected,
}: {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  selected: Account;
}) {
  const [showDelete, setShowDelete] = useState(false);
  return (
    <Modal title="Edit Account" open={setModalOpen}>
      {showDelete ? (
        <DeleteView setShowDelete={setShowDelete} account={selected} />
      ) : (
        <>
          <Selected selected={selected} />
          <div className="p-4 gap-4 flex flex-col">
            <div className="p-2 py-4 flex flex-col  bg-blue-100 rounded-lg">
              <p>Name</p>
              <input
                className="border-b py-1 focus:outline-none w-full"
                defaultValue={selected.name}
              />
            </div>
            <div className="p-2 py-4 flex flex-col  bg-blue-100 rounded-lg">
              <p>Amount</p>
              <input
                className="border-b py-1 focus:outline-none w-full"
                defaultValue={selected.amount}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 pb-4">
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
            <button
              className="font-bold text-red-400 p-2 hover:bg-red-100 cursor-pointer w-fit rounded-md self-center"
              onClick={() => {
                setShowDelete(true);
              }}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </Modal>
  );
}
