import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

export const clientConfig = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof clientConfig;
  }
}
