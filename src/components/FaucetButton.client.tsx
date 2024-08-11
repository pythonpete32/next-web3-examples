import React from "react";
import { useAccount, useWriteContract } from "wagmi";
import { Button } from "@/components/ui/button";

import { Loader2 } from "lucide-react";
import MockUSDC from "@/config/contracts/MockUSDC";

const FaucetButton = () => {
  const { address } = useAccount();
  const { writeContract, isPending } = useWriteContract();

  const handleFaucet = () => {
    writeContract({
      address: MockUSDC.address,
      abi: MockUSDC.abi,
      functionName: "faucet",
      args: [address!],
    });
  };

  return (
    <Button
      variant="secondary"
      onClick={handleFaucet}
      disabled={isPending || !address}
    >
      {isPending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Requesting USDC...
        </>
      ) : (
        "USDC Faucet"
      )}
    </Button>
  );
};

export default FaucetButton;
