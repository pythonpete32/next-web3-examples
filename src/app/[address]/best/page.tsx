import { AddressProps } from "@/types";
import UsdcBalanceClient from "./UsdcBalance.client";
import { getUsdcBalanceServer } from "@/server/actions";

export default async function Page({ address }: AddressProps) {
  let initialBalance = await getUsdcBalanceServer(address);
  if (!initialBalance) initialBalance = 0n;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-16 w-full flex justify-center">
        USDC Balance Checker
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Client-side Version</h2>
          <UsdcBalanceClient initialBalance={initialBalance} />
          <p className="mt-4 text-sm text-gray-600">
            This version uses client-side rendering but the initial data is pre
            fetched on the server.
          </p>
        </div>
      </div>
    </div>
  );
}
