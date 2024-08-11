"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ConnectKitButton } from "connectkit";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected, address } = useAccount();
  const router = useRouter();
  console.log({ isConnected, address });
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Welcome to Server Component Demo</CardTitle>
          <CardDescription>
            This application demonstrates how to use server components in a dApp
            with Next.js
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            We have three versions of the application to showcase different
            approaches:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Good: Shows the basic client and server component versions</li>
            <li>
              Better: combines the benefits of both by prefetching on the server
              and hydrating on the client
            </li>
            <li>Best: Gigga brain version using a hydration boundry</li>
          </ul>
          <p className="mb-6">
            {isConnected
              ? "Your wallet is connected. Click 'Enter' to start with the 'Good' version."
              : "To get started, please connect your wallet."}
          </p>
          <div className="flex justify-center">
            {isConnected ? (
              <Button onClick={() => router.push(`/${address}/good`)}>
                Enter
              </Button>
            ) : (
              <ConnectKitButton />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
