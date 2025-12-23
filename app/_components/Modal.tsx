import { Dispatch, SetStateAction } from "react";

export default function Modal({
  size = "small",
  setModalOpen,
  children,
}: {
  size?: "small" | "medium" | "large";
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  const width =
    size === "small" ? "w-100" : size === "medium" ? "w-150" : "w-200";
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
      <div
        className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-[0.8] z-2"
        onClick={() => {
          setModalOpen(false);
        }}
      ></div>
      <div className={`${width} max-h-[80vh] overflow-y-auto bg-white z-4 rounded-xl`}>{children}</div>
    </div>
  );
}
