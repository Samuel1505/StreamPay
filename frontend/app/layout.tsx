import type { Metadata } from "next";
import "./globals.css";
import { Web3Provider } from './providers';
import { Header } from './components/Header';

export const metadata: Metadata = {
  title: "StreamPay - Real-Time Payment Streaming",
  description: "StreamPay moves your money every second, not every month. Real-time, on-chain streaming for salaries, subscriptions, and rewards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Web3Provider>
          <Header />
          <div className="pt-20">
            {children}
          </div>
        </Web3Provider>
      </body>
    </html>
  );
}
