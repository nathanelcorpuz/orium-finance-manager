import { Account } from "@/utils/types";

export default function Selected({ selected }: { selected: Account }) {
  return (
    <div className="flex gap-4 p-4">
      <div className="flex flex-col w-full p-2 border border-blue-200 rounded-lg">
        <p className="text-gray-400 text-[10px]">Name</p>
        <p>{selected.name}</p>
      </div>
      <div className="flex flex-col w-full p-2 border border-blue-200 rounded-lg">
        <p className="text-gray-400 text-[10px]">Amount</p>
        <p>{selected.amount}</p>
      </div>
    </div>
  );
}
