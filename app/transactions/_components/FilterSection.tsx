import { Filter } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export default function FilterSection({
  setModalOpen,
}: {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="flex items-center">
      <button
        className="flex items-center w-8 h-8 hover:bg-blue-200 hover:cursor-pointer rounded-full justify-center"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <Filter size={16} />
      </button>
    </div>
  );
}
