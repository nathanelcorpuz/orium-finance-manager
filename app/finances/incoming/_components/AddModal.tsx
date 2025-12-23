import Modal from "@/app/_components/Modal";
import { Dispatch, SetStateAction } from "react";

export default function AddModal({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Modal title="Add New Account" open={setOpen}>
      <div className="p-4 gap-4 flex flex-col">
        <div className="p-2 py-4 flex flex-col  bg-blue-100 rounded-lg">
          <p>Name</p>
          <input className="border-b py-1 focus:outline-none w-full" />
        </div>
        <div className="p-2 py-4 flex flex-col  bg-blue-100 rounded-lg">
          <p>Amount</p>
          <input className="border-b py-1 focus:outline-none w-full" />
        </div>
      </div>
      <div className="flex justify-between p-4 gap-2">
        <button
          className="p-2 w-full border border-black rounded-lg cursor-pointer hover:bg-gray-200"
          onClick={() => {
            setOpen(false);
          }}
        >
          Cancel
        </button>
        <button
          className="p-2 w-full border border-black rounded-lg cursor-pointer hover:bg-gray-200"
          onClick={() => {
            setOpen(false);
          }}
        >
          Submit
        </button>
      </div>
    </Modal>
  );
}
