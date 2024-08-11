import { serverConfig } from "@/config/wagmi/wagmi.server";
import { getEnsName } from "wagmi/actions";

async function getEnsNameServer(address: `0x${string}`) {
  try {
    const ensName = await getEnsName(serverConfig, { address });
    return ensName;
  } catch (error) {
    console.error("Error fetching ENS name:", error);
    return null;
  }
}

export default async function EnsNameServer() {
  const address = "0xd2135CfB216b74109775236E36d4b433F1DF507B" as `0x${string}`;
  const ensName = await getEnsNameServer(address);

  return (
    <div className="p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">ENS Name Resolution (Server)</h2>
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
