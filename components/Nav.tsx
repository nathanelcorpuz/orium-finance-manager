"use client";
import {
  House,
  List,
  Settings,
  Shapes,
  TrendingUpDown,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const inHome = pathname === "/";
  const inForecast = pathname === "/forecast";
  const inTransactions = pathname === "/transactions";
  const inFinances = pathname === "/finances";
  const inCategories = pathname === "/categories";
  const inSettings = pathname === "/settings";

  return (
    <nav className="flex flex-col bg-blue-100 rounded-sm p-3 h-full gap-4">
      <Link href="/">
        <div
          className={`w-11.25 h-11.25 ${
            inHome ? "bg-blue-800" : ""
          } rounded-full flex items-center justify-center`}
        >
          <House size={22} color={inHome ? "white" : "black"} />
        </div>
      </Link>
      <Link href="/forecast">
        <div
          className={`w-11.25 h-11.25 ${
            inForecast ? "bg-blue-800" : ""
          } rounded-full flex items-center justify-center`}
        >
          <TrendingUpDown size={22} color={inForecast ? "white" : "black"} />
        </div>
      </Link>
      <Link href="/transactions">
        <div
          className={`w-11.25 h-11.25 ${
            inTransactions ? "bg-blue-800" : ""
          } rounded-full flex items-center justify-center`}
        >
          <List size={22} color={inTransactions ? "white" : "black"} />
        </div>
      </Link>
      <Link href="/finances">
        <div
          className={`w-11.25 h-11.25 ${
            inFinances ? "bg-blue-800" : ""
          } rounded-full flex items-center justify-center`}
        >
          <Wallet size={22} color={inFinances ? "white" : "black"} />
        </div>
      </Link>
      <Link href="/categories">
        <div
          className={`w-11.25 h-11.25 ${
            inCategories ? "bg-blue-800" : ""
          } rounded-full flex items-center justify-center`}
        >
          <Shapes size={22} color={inCategories ? "white" : "black"} />
        </div>
      </Link>
      <Link href="/settings">
        <div
          className={`w-11.25 h-11.25 ${
            inSettings ? "bg-blue-800" : ""
          } rounded-full flex items-center justify-center`}
        >
          <Settings size={22} color={inSettings ? "white" : "black"} />
        </div>
      </Link>
    </nav>
  );
}
