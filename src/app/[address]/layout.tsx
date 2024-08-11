import TopNav from "@/components/TopNav.client";

export default function AddressLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <TopNav />
      <main>{children}</main>
    </>
  );
}
