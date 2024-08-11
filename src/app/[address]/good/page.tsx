import { AddressProps } from "@/types";
import UsdcBalanceClient from "./UsdcBalance.client";
import UsdcBalanceServer from "./UsdcBalance.server";

type Params = {
  params: AddressProps;
};

export default function Page({ params }: Params) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-16 w-full flex justify-center">
        USDC Balance Checker
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Client-side Version</h2>
          <UsdcBalanceClient />
          <p className="mt-4 text-sm text-gray-600">
            This version uses client-side rendering and requires a connected
            wallet.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Server-side Version</h2>
          <UsdcBalanceServer address={params.address} />
          <p className="mt-4 text-sm text-gray-600">
            This version uses server-side rendering. The address comes from the
            URL.
          </p>
        </div>
      </div>

      <div className="mt-8 p-4  rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Comparison</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Client-side: Updates in real-time, requires wallet connection</li>
          <li>
            Server-side: Faster initial load, works without wallet connection
          </li>
        </ul>
      </div>
    </div>
  );
}
