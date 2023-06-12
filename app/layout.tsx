import ThemeProvider from "@/providers/ThemeProvider";
import "./globals.css";
import { Libre_Baskerville } from "next/font/google";

const inter = Libre_Baskerville({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "brAIn Pal",
  description: "A powerfull AId to Storm your ideias",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex">
            <div className="flex relative h-screen w-3/5 items-center justify-center bg-gradient-to-bl from-slate-950 to-slate-800">
              <h1 className="font-extrabold tracking-wider text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                brAIn pal
              </h1>
              <div className="absolute opacity-30 top-1/3 right-1/3 animate-blob1 mix-blend-hard-light filter blur-2xl  w-72 h-72 bg-purple-300 rounded-full"></div>
              <div className="absolute opacity-30 top-1/3 left-1/3 animate-blob2 mix-blend-hard-light filter blur-2xl w-72 h-72 bg-pink-300 rounded-full"></div>
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
