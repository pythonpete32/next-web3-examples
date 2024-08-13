"use client";

import MockUSDC from "@/config/contracts/MockUSDC";
import { formatToken } from "@/lib/formatToken";
import React from "react";
import { useAccount, useReadContract } from "wagmi";

type Props = {
  initialBalance: bigint;
};

export default function UsdcBalanceClient({ initialBalance }: Props) {
  const account = useAccount();

  const {
    data: balance,
    isError,
    isLoading,
  } = useReadContract({
    abi: MockUSDC.abi,
    address: MockUSDC.address,
    functionName: "balanceOf",
    args: [account.address!],
    query: {
      enabled: !!account.address,
      refetchInterval: 5000, // refresh after 5 seconds
      initialData: initialBalance,
    },
  });

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">USDC Balance Client</h2>
      {isLoading && <p className="text-gray-600">Loading USDC balance...</p>}
      {isError && <p className="text-red-500">Error fetching USDC balance</p>}
      {Number(balance) === 0 ? (
        <p>Mint some USDC</p>
      ) : (
        <p className="text-green-600">
          Balance:{" "}
          <span className="font-semibold">{formatToken(balance, 6)}</span>
        </p>
      )}
    </div>
  );
}
