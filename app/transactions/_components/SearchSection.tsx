import { Search } from "lucide-react";

export default function SearchSection() {
  return (
    <div className="flex flex-col gap-4 bg-blue-100 rounded-xl p-4">
      <p className="opacity-50">By search</p>
      <div className="flex gap-2">
        <button>
          <Search size={18} />
        </button>
        <input className="border-b py-1 focus:outline-none w-full" />
      </div>
    </div>
  );
}
