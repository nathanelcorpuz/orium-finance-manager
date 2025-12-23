"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import AddModal from "./AddModal";

export default function Add() {
  const [addModalOpen, setAddModalOpen] = useState(false);

  return (
    <>
      <div>
        <button
          className="p-2 rounded-md bg-blue-500 hover:bg-blue-400 cursor-pointer"
          onClick={() => setAddModalOpen(true)}
        >
          <Plus size={24} color="white" />
        </button>
      </div>
      {addModalOpen && <AddModal setOpen={setAddModalOpen} />}
    </>
  );
}
