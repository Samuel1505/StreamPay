'use client';

import { useAppKit } from '@reown/appkit/react';
import { useAccount } from 'wagmi';
import { Wallet } from 'lucide-react';

export function ConnectButton() {
  const { open } = useAppKit();
  const { isConnected, address } = useAccount();

  return (
    <button
      onClick={() => open()}
      className="group relative inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-primary to-accent rounded-full font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105"
    >
      <Wallet className="w-5 h-5" />
      <span>
        {isConnected 
          ? `${address?.slice(0, 6)}...${address?.slice(-4)}`
          : 'Connect Wallet'
        }
      </span>
    </button>
  );
}