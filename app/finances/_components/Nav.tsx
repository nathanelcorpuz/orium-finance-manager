"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const inAccounts = pathname === "/finances/accounts";
  const inIncoming = pathname === "/finances/incoming";
  const inOutgoing = pathname === "/finances/outgoing";

  return (
    <nav className="flex gap-4 py-4">
      <Link href="/finances/accounts">
        <p
          className={`p-2 hover:bg-blue-100 rounded-md ${
            inAccounts ? "bg-blue-500 text-white hover:bg-blue-700" : null
          }`}
        >
          Accounts
        </p>
      </Link>
      <Link href="/finances/incoming">
        <p
          className={`p-2 hover:bg-blue-100 rounded-md ${
            inIncoming ? "bg-blue-500 text-white hover:bg-blue-700" : null
          }`}
        >
          Incoming
        </p>
      </Link>
      <Link href="/finances/outgoing">
        <p
          className={`p-2 hover:bg-blue-100 rounded-md ${
            inOutgoing ? "bg-blue-500 text-white hover:bg-blue-700" : null
          }`}
        >
          Outgoing
        </p>
      </Link>
    </nav>
  );
}
