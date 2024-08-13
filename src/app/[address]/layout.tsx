import TopNav from "@/components/TopNav.client";
import { AddressProps } from "@/types";
import { notFound } from "next/navigation";
import { isAddress } from "viem";

export default function AddressLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { address: `0x${string}` };
}) {
  if (!isAddress(params.address)) {
    notFound();
  }
  return (
    <>
      <TopNav address={params.address} />
      <main>{children}</main>
    </>
  );
}
