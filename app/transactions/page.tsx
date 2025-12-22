import AccountsSection from "./_components/AccountsSection";
import TransactionsSection from "./_components/TransactionsSection";
import { mockAccounts } from "@/utils/mockAccounts";
import { mockTransactions } from "@/utils/mockTransactions";

export default function Transactions() {
  return (
    <main className="gap-4 flex flex-col p-4 pl-0 text-xs">
      <AccountsSection accounts={mockAccounts} />
      <TransactionsSection transactions={mockTransactions} />
    </main>
  );
}
