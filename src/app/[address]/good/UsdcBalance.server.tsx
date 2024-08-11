import { formatToken } from "@/lib/formatToken";
import { getUsdcBalanceServer } from "@/server/actions";
import { AddressProps } from "@/types";

export default async function UsdcBalanceServer({ address }: AddressProps) {
  const balance = await getUsdcBalanceServer(address);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">USDC Balance (Server)</h2>
      {Number(balance) === 0 ? (
        <p>Mint some USDC</p>
      ) : (
        <p className="text-green-600">
          Balance:{" "}
          <span className="font-semibold">{formatToken(balance, 6)}</span>
        </p>
      )}
      {!balance && <p className="text-red-500">Error fetching USDC balance</p>}
    </div>
  );
}
