export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="flex relative h-screen w-3/5 items-center justify-center bg-gradient-to-bl from-slate-950 to-background">
        <h1 className="font-extrabold tracking-wider text-transparent text-8xl bg-clip-text bg-gradient-to-r from-accent to-primary">
          brAIn pal
        </h1>
        <div className="absolute opacity-30 top-1/3 right-1/3 animate-blob1 mix-blend-hard-light filter blur-2xl  w-72 h-72 bg-primary rounded-full"></div>
        <div className="absolute opacity-30 top-1/3 left-1/3 animate-blob2 mix-blend-hard-light filter blur-2xl w-72 h-72 bg-accent rounded-full"></div>
      </div>
      {children}
    </div>
  );
}
