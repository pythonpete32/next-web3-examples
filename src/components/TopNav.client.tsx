"use client";

import React from "react";
import Link from "next/link";
import { ConnectKitButton } from "connectkit";
import { Package2 } from "lucide-react";
import FaucetButton from "./FaucetButton.client";

export default function TopNav() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Good
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Better
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Best
        </Link>
      </nav>

      <div className="w-full" />
      <FaucetButton />
      <ConnectKitButton />
    </header>
  );
}
