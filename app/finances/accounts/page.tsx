import { mockAccounts } from "@/utils/mockAccounts";
import Add from "./_components/Add";
import AccountsList from "./_components/AccountsList";

export default function Accounts() {
  return (
    <main className="flex flex-col gap-4 pt-2">
      <Add />
      <AccountsList accounts={mockAccounts} />
    </main>
  );
}
