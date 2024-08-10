"use client";

import React from "react";
import { useEnsName } from "wagmi";

export default function EnsNameClient() {
  const {
    data: ensName,
    isError,
    isLoading,
  } = useEnsName({
    address: "0xd2135CfB216b74109775236E36d4b433F1DF507B",
  });

  return (
    <div className="p-4r rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">ENS Name Resolution</h2>
      {isLoading ? (
        <p className="text-gray-600">Loading ENS name...</p>
      ) : isError ? (
        <p className="text-red-500">Error fetching ENS name</p>
      ) : ensName ? (
        <p className="text-green-600">
          ENS Name: <span className="font-semibold">{ensName}</span>
        </p>
      ) : (
        <p className="text-yellow-600">No ENS name found for this address</p>
      )}
      <p className="mt-2 text-sm text-gray-500">
        Address: 0xd2135CfB216b74109775236E36d4b433F1DF507B
      </p>
    </div>
  );
}
