'use client';

import { useState } from 'react';
import { ArrowLeft, Info } from 'lucide-react';
import Link from 'next/link';

const tokens = [
  { symbol: 'USDC', name: 'USD Coin', balance: '10,500.00' },
  { symbol: 'DAI', name: 'Dai Stablecoin', balance: '5,200.00' },
  { symbol: 'USDT', name: 'Tether USD', balance: '8,300.00' },
  { symbol: 'ETH', name: 'Ethereum', balance: '2.5' },
];

export default function CreateStreamPage() {
  const [selectedToken, setSelectedToken] = useState('USDC');
  const [flowRate, setFlowRate] = useState('');
  const [duration, setDuration] = useState('30');
  const [recipient, setRecipient] = useState('');

  const calculateTotal = () => {
    if (!flowRate || !duration) return '0.00';
    const perSecond = parseFloat(flowRate);
    const days = parseInt(duration);
    const total = perSecond * 86400 * days; // seconds in a day * days
    return total.toFixed(2);
  };

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </Link>
          <h1 className="text-4xl font-bold mb-2">Create New Stream</h1>
          <p className="text-text-secondary">Set up a continuous payment stream</p>
        </div>

        <div className="glass-panel rounded-3xl p-8">
          <form className="space-y-8">
            {/* Recipient Address */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Recipient Address
              </label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="0x..."
                className="w-full px-4 py-3 glass-light rounded-xl border border-border focus:border-primary outline-none transition-colors"
              />
              <p className="text-xs text-text-muted mt-2">Enter the recipient's wallet address</p>
            </div>

            {/* Token Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Select Token
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {tokens.map((token) => (
                  <button
                    key={token.symbol}
                    type="button"
                    onClick={() => setSelectedToken(token.symbol)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedToken === token.symbol
                        ? 'border-primary bg-primary/20'
                        : 'border-border glass-light hover:border-primary/50'
                    }`}
                  >
                    <div className="font-bold text-lg">{token.symbol}</div>
                    <div className="text-xs text-text-secondary mt-1">
                      Balance: {token.balance}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Flow Rate */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Flow Rate (per second)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={flowRate}
                  onChange={(e) => setFlowRate(e.target.value)}
                  placeholder="0.00"
                  step="0.01"
                  className="w-full px-4 py-3 glass-light rounded-xl border border-border focus:border-primary outline-none transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary">
                  {selectedToken}/sec
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Info className="w-4 h-4 text-text-muted" />
                <p className="text-xs text-text-muted">
                  This amount will be streamed every second to the recipient
                </p>
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Stream Duration (days)
              </label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="30"
                min="1"
                className="w-full px-4 py-3 glass-light rounded-xl border border-border focus:border-primary outline-none transition-colors"
              />
              <p className="text-xs text-text-muted mt-2">
                How long should the stream run?
              </p>
            </div>

            {/* Summary */}
            <div className="glass-light rounded-2xl p-6 space-y-3">
              <h3 className="font-bold mb-4">Stream Summary</h3>
              
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Flow Rate:</span>
                <span className="font-medium">
                  {flowRate || '0.00'} {selectedToken}/second
                </span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Per Day:</span>
                <span className="font-medium">
                  {flowRate ? (parseFloat(flowRate) * 86400).toFixed(2) : '0.00'} {selectedToken}
                </span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Duration:</span>
                <span className="font-medium">{duration} days</span>
              </div>
              
              <div className="border-t border-border pt-3 mt-3">
                <div className="flex justify-between">
                  <span className="font-bold">Total Amount:</span>
                  <span className="font-bold text-primary text-xl">
                    {calculateTotal()} {selectedToken}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Link 
                href="/dashboard"
                className="flex-1 py-3 glass-light rounded-full text-center font-medium hover:bg-white/10 transition-all"
              >
                Cancel
              </Link>
              <button
                type="button"
                className="flex-1 py-3 bg-gradient-to-r from-primary to-accent rounded-full font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105"
              >
                Create Stream
              </button>
            </div>
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-8 glass-panel rounded-2xl p-6">
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <Info className="w-5 h-5 text-primary" />
            How it works
          </h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>• You'll approve the StreamPay contract to spend the total amount</li>
            <li>• Tokens will stream to the recipient every second automatically</li>
            <li>• The recipient can withdraw their earned balance anytime</li>
            <li>• You can pause or cancel the stream at any time</li>
          </ul>
        </div>
      </div>
    </main>
  );
}