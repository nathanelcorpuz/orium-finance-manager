import { mockIncoming } from "@/utils/mockIncoming";
import Add from "./_components/Add";
import IncomingList from "./_components/IncomingList";
import { mockAccounts } from "@/utils/mockAccounts";

export default function Incoming() {
  return (
    <main className="flex flex-col gap-4 pt-2">
      <Add />
      <IncomingList list={mockIncoming} accounts={mockAccounts} />
    </main>
  );
}
