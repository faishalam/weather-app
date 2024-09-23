import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "./components/queryProvider/QueryProvider";
import { ThemeProvider } from "./providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Weather App",
  description: "Weather App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <ThemeProvider>
        <QueryProvider>
          <body className="flex min-h-screen flex-1 flex-col px-5 md:px-20 h-screen">
          {children}
          </body>
        </QueryProvider>
      </ThemeProvider>
    </html>
  );
}
