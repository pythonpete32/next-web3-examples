import { AddressProps } from "@/types";
import UsdcBalanceClient from "./UsdcBalance.client";
import { getUsdcBalanceServer } from "@/server/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Page({ address }: AddressProps) {
  let initialBalance = await getUsdcBalanceServer(address);
  if (!initialBalance) initialBalance = 0n;

  // explain why we need a new client
  const queryClient = new QueryClient();

  // explain this prefetch thing
  await queryClient.prefetchQuery({
    queryKey: ["balance", address],
    queryFn: () => getUsdcBalanceServer(address),
  });

  return (
    // explain what a HydrationBoundary is and what dehydrate does
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BalancePage initialBalance={initialBalance} />
    </HydrationBoundary>
  );
}

// Refactor to its own component to keep the Page clean
function BalancePage({ initialBalance }: { initialBalance: bigint }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-16 w-full flex justify-center">
        USDC Balance Checker
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Dehydrated version</h2>
          <UsdcBalanceClient />
          <p className="mt-4 text-sm text-gray-600">
            This version uses client-side rendering but the initial data is pre
            fetched on the server and Dehydrated
          </p>
        </div>
      </div>
    </div>
  );
}
