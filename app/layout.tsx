import ThemeProvider from "@/providers/ThemeProvider";
import { UserProvider } from "@/contexts/UserContext";
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
          <UserProvider>{children}</UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
