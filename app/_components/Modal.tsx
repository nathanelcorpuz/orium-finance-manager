import { X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export default function Modal({
  size = "small",
  open,
  title,
  children,
  onClose = () => {},
}: {
  size?: "small" | "medium" | "large";
  open: Dispatch<SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
}) {
  const width =
    size === "small" ? "w-100" : size === "medium" ? "w-150" : "w-200";
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
      <div
        className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-[0.8] z-2"
        onClick={() => {
          open(false);
        }}
      ></div>
      <div
        className={`${width} max-h-[80vh] overflow-y-auto bg-white z-4 rounded-xl`}
      >
        <div className="flex justify-between p-4">
          <p className="text-lg">{title}</p>
          <button
            onClick={() => {
              open(false);
              onClose();
            }}
            className="hover:bg-blue-100 p-1 rounded-full cursor-pointer"
          >
            <X size={22} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
