"use client";

import React from "react";
import { useAccount, useEnsName } from "wagmi";

export default function EnsNameClient() {
  const account = useAccount();

  const {
    data: ensName,
    isError,
    isLoading,
  } = useEnsName({
    address: account.address,
    query: {
      enabled: !!account.address,
    },
  });

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">ENS Name Resolution</h2>
      {isLoading && <p className="text-gray-600">Loading ENS name...</p>}
      {isError && <p className="text-red-500">Error fetching ENS name</p>}
      {ensName && (
        <p className="text-green-600">
          ENS Name:{" "}
          <span className="font-semibold">
            {ensName ? ensName : "No ENS name found for this address"}
          </span>
        </p>
      )}
    </div>
  );
}
