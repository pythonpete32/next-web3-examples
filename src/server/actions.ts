"use server";

import MockUSDC from "@/config/contracts/MockUSDC";
import { serverConfig } from "@/config/wagmi/wagmi.server";
import { readContract } from "@wagmi/core";

export async function getUsdcBalanceServer(address: `0x${string}`) {
  try {
    const balance = await readContract(serverConfig, {
      abi: MockUSDC.abi,
      address: MockUSDC.address,
      functionName: "balanceOf",
      args: [address],
    });
    return balance;
  } catch (error) {
    console.error("Error fetching USDC balance:", error);
    return null;
  }
}
