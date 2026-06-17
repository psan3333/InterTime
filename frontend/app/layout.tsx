import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/shared/components/ui/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const metadata: Metadata = {
  title: "Task Tracker",
  description: "Track your progress on your work in isolated environment",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full transition-colors flex flex-col bg-background text-foreground">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
