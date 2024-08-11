import { createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { getDefaultConfig } from "connectkit";

export const clientConfig = createConfig(
  getDefaultConfig({
    appName: "server components dapp tutorial",
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID ?? "",
    chains: [sepolia],
    transports: { [sepolia.id]: http() },
  })
);

declare module "wagmi" {
  interface Register {
    config: typeof clientConfig;
  }
}
