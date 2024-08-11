"use client";

import { clientConfig } from "@/config/wagmi/wagmi.client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { WagmiProvider } from "wagmi";
import { ConnectKitProvider } from "connectkit";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

const Providers: FC<PropsWithChildren> = ({ children }) => {
  // fix wagmi hydration error
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <WagmiProvider config={clientConfig}>
        <QueryClientProvider client={queryClient}>
          <ConnectKitProvider>{children}</ConnectKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
};

export default Providers;
