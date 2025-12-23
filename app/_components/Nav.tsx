"use client";
import { House, List, Settings, TrendingUpDown, Wallet } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const inHome = pathname === "/";
  const inForecast = pathname.includes("forecast");
  const inTransactions = pathname.includes("/transactions");
  const inFinances = pathname.includes("/finances");
  const inSettings = pathname.includes("/settings");

  return (
    <nav className="fixed h-screen w-25 p-4">
      <div className="flex flex-col bg-blue-100 rounded-full h-full gap-4 p-4">
        <Link href="/">
          <div
            className={`w-9 h-9 ${
              inHome ? "bg-blue-800" : ""
            } rounded-full flex items-center justify-center`}
          >
            <House size={18} color={inHome ? "white" : "blue"} />
          </div>
        </Link>
        <Link href="/forecast">
          <div
            className={`w-9 h-9 ${
              inForecast ? "bg-blue-800" : ""
            } rounded-full flex items-center justify-center`}
          >
            <TrendingUpDown size={18} color={inForecast ? "white" : "blue"} />
          </div>
        </Link>
        <Link href="/transactions">
          <div
            className={`w-9 h-9 ${
              inTransactions ? "bg-blue-800" : ""
            } rounded-full flex items-center justify-center`}
          >
            <List size={18} color={inTransactions ? "white" : "blue"} />
          </div>
        </Link>
        <Link href="/finances">
          <div
            className={`w-9 h-9 ${
              inFinances ? "bg-blue-800" : ""
            } rounded-full flex items-center justify-center`}
          >
            <Wallet size={18} color={inFinances ? "white" : "blue"} />
          </div>
        </Link>
        <Link href="/settings">
          <div
            className={`w-9 h-9 ${
              inSettings ? "bg-blue-800" : ""
            } rounded-full flex items-center justify-center`}
          >
            <Settings size={18} color={inSettings ? "white" : "blue"} />
          </div>
        </Link>
      </div>
    </nav>
  );
}
