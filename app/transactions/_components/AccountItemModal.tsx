import { Dispatch, SetStateAction } from "react";

export default function AccountItemModal({
  setModalShown,
}: {
  setModalShown: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
      <div
        className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-[0.8] z-2"
        onClick={() => {
          console.log("r");
          setModalShown(false);
        }}
      ></div>
      <div className="w-200 h-200 bg-white z-4">
        <p>Modal</p>
        <button
          onClick={() => {
            console.log("B");
            setModalShown(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
