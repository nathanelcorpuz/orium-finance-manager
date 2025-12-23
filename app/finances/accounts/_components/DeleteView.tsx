import { Account } from "@/utils/types";
import { X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import Selected from "./Selected";

export default function DeleteView({
  setShowDelete,
  account,
}: {
  setShowDelete: Dispatch<SetStateAction<boolean>>;
  account: Account;
}) {
  return (
    <>
      <div className="flex justify-between p-4">
        <p className="text-lg">Delete Account</p>
        <button
          onClick={() => {
            setShowDelete(false);
          }}
        >
          <X size={22} />
        </button>
      </div>
      <p className="p-4 text-red-500 font-bold">This action cannot be undone</p>
      <Selected selected={account} />
      <div className="flex justify-between p-4 gap-2">
        <button
          className="p-2 w-full border border-black rounded-lg cursor-pointer hover:bg-gray-200"
          onClick={() => {
            setShowDelete(false);
          }}
        >
          Back
        </button>
        <button
          className="p-2 w-full border border-black rounded-lg cursor-pointer hover:bg-gray-200"
          onClick={() => {
            setShowDelete(false);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}
