import AccountsSection from "./_components/AccountsSection";
import TransactionsSection from "./_components/TransactionsSection";
import SearchSection from "./_components/SearchSection";
import { mockAccounts } from "@/utils/mockAccounts";
import { mockTransactions } from "@/utils/mockTransactions";

export default function Transactions() {
  return (
    <main className="gap-4 flex flex-col p-4 pl-0 text-sm">
      <div className="flex h-20 gap-4">
        <AccountsSection accounts={mockAccounts} />
        <SearchSection />
      </div>
      <TransactionsSection transactions={mockTransactions} />
    </main>
  );
}
