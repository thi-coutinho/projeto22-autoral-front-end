export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-screen bg-background text-white p-6">
      {children}
    </div>
  );
}
