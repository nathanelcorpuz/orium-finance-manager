import { Search } from "lucide-react";

export default function SearchSection() {
  return (
    <div className="flex gap-1 items-center w-[25%] bg-blue-100 rounded-xl p-4">
      <button>
        <Search size={18} />
      </button>
      <input className="border-b p-1 focus:outline-none w-full" />
    </div>
  );
}
