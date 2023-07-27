import TopMenu from "@/components/TopMenu";
import { RefreshProvider } from "@/contexts/RefreshContext";
import { SavePoolProvider } from "@/contexts/SavePollContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RefreshProvider>
      <SavePoolProvider>
        <div className="h-screen">
          <TopMenu />
          <div className="flex w-full h-full bg-background text-white px-6 pb-6 pt-20">
            {children}
          </div>
        </div>
      </SavePoolProvider>
    </RefreshProvider>
  );
}
