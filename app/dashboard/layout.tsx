import TopMenu from "@/components/TopMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopMenu />
      <div className="flex w-full h-screen bg-background text-white px-6 pb-6 pt-20">
        {children}
      </div>
    </>
  );
}
