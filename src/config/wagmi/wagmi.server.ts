import { http, createConfig } from "@wagmi/core";
import { sepolia } from "@wagmi/core/chains";

export const serverConfig = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    serverConfig: typeof serverConfig;
  }
}
