import { Dispatch, SetStateAction } from "react";
import SearchSection from "./SearchSection";
import Modal from "@/app/_components/Modal";

export default function FilterModal({
  setModalOpen,
}: {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Modal title="Filter" open={setModalOpen}>
      <div className="p-4 flex flex-col gap-2">
        <SearchSection />
        <div className="flex flex-col p-4 bg-blue-100 rounded-md gap-4">
          <p className="opacity-50">By amount</p>
          <div className="flex gap-4">
            <div className="flex gap-2">
              <p>From</p>
              <input className="border-b py-1 focus:outline-none w-full" />
            </div>
            <div className="flex gap-2">
              <p>To</p>
              <input className="border-b py-1 focus:outline-none w-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 bg-blue-100 rounded-md gap-4">
          <p className="opacity-50">By date</p>
          <div className="flex gap-4">
            <div className="flex gap-4">
              <p>From</p>
              <input
                className="border-b py-1 focus:outline-none w-full"
                type="date"
              />
            </div>
            <div className="flex gap-4">
              <p>To</p>
              <input
                className="border-b py-1 focus:outline-none w-full"
                type="date"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 bg-blue-100 rounded-md gap-4">
          <p className="opacity-50">By category</p>
          <div className="flex gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="income" name="income" />
              <label htmlFor="income">Income</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="bill" name="bill" />
              <label htmlFor="bill">Bill</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="debt" name="debt" />
              <label htmlFor="debt">Debt</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="loan" name="loan" />
              <label htmlFor="loan">Loan</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="savings" name="savings" />
              <label htmlFor="savings">Savings</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="extra" name="extra" />
              <label htmlFor="extra">Extra</label>
            </div>
          </div>
        </div>
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
    </Modal>
  );
}
