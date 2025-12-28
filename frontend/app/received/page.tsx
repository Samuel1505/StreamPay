'use client';

import { useState } from 'react';
import { Download, TrendingUp, Clock } from 'lucide-react';

const mockIncomingStreams = [
  {
    id: 1,
    sender: '0x4d2a3b1c5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b',
    senderName: 'TechCorp Inc.',
    token: 'USDC',
    flowRate: '0.02',
    totalAmount: '5000.00',
    received: '2340.00',
    available: '2340.00',
    startDate: '2024-01-01',
    endDate: '2024-03-01',
    status: 'active',
    progress: 47,
  },
  {
    id: 2,
    sender: '0x7e5c6d4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e',
    senderName: 'Web3 DAO',
    token: 'DAI',
    flowRate: '0.015',
    totalAmount: '3000.00',
    received: '1850.00',
    available: '450.00',
    startDate: '2024-01-10',
    endDate: '2024-02-25',
    status: 'active',
    progress: 62,
  },
  {
    id: 3,
    sender: '0x2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a',
    senderName: 'DeFi Protocol',
    token: 'USDT',
    flowRate: '0.01',
    totalAmount: '2000.00',
    received: '2000.00',
    available: '0.00',
    startDate: '2023-12-01',
    endDate: '2024-01-15',
    status: 'completed',
    progress: 100,
  },
];

export default function ReceivedPage() {
  const [streams] = useState(mockIncomingStreams);

  const totalReceived = streams.reduce((acc, s) => acc + parseFloat(s.received), 0);
  const totalAvailable = streams.reduce((acc, s) => acc + parseFloat(s.available), 0);
  const activeStreams = streams.filter(s => s.status === 'active').length;

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Received Streams</h1>
          <p className="text-text-secondary">View and withdraw from incoming payment streams</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass-panel rounded-2xl p-6">
            <div className="text-3xl font-bold mb-1 text-gradient">
              ${totalAvailable.toFixed(2)}
            </div>
            <div className="text-sm text-text-secondary">Available to Withdraw</div>
            <button className="mt-4 w-full py-2 bg-linear-to-r from-primary to-accent rounded-lg font-medium text-white transition-all hover:shadow-lg hover:shadow-primary/50">
              Withdraw All
            </button>
          </div>
          
          <div className="glass-panel rounded-2xl p-6">
            <div className="text-3xl font-bold mb-1">
              ${totalReceived.toFixed(2)}
            </div>
            <div className="text-sm text-text-secondary">Total Received</div>
            <div className="flex items-center gap-1 text-success text-sm mt-4">
              <TrendingUp className="w-4 h-4" />
              <span>+12.5% this month</span>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6">
            <div className="text-3xl font-bold mb-1">{activeStreams}</div>
            <div className="text-sm text-text-secondary">Active Streams</div>
            <div className="flex items-center gap-1 text-primary text-sm mt-4">
              <Clock className="w-4 h-4" />
              <span>Streaming now</span>
            </div>
          </div>
        </div>

        {/* Streams List */}
        <div className="space-y-4">
          {streams.map((stream) => (
            <div key={stream.id} className="glass-panel rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-lg">{stream.senderName || 'Unknown Sender'}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      stream.status === 'active' 
                        ? 'bg-success/20 text-success'
                        : 'bg-primary/20 text-primary'
                    }`}>
                      {stream.status.charAt(0).toUpperCase() + stream.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary font-mono">From: {stream.sender}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                <div>
                  <div className="text-xs text-text-muted mb-1">Flow Rate</div>
                  <div className="font-medium">{stream.flowRate} {stream.token}/sec</div>
                </div>
                <div>
                  <div className="text-xs text-text-muted mb-1">Total Amount</div>
                  <div className="font-medium">{stream.totalAmount} {stream.token}</div>
                </div>
                <div>
                  <div className="text-xs text-text-muted mb-1">Received</div>
                  <div className="font-medium text-primary">{stream.received} {stream.token}</div>
                </div>
                <div>
                  <div className="text-xs text-text-muted mb-1">Available</div>
                  <div className="font-bold text-success text-lg">{stream.available} {stream.token}</div>
                </div>
                <div>
                  <button 
                    disabled={parseFloat(stream.available) === 0}
                    className="w-full px-4 py-2 bg-primary/20 rounded-lg text-primary font-medium hover:bg-primary/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Withdraw</span>
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 bg-surface rounded-full overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 bg-linear-to-r from-primary to-accent rounded-full transition-all"
                  style={{ width: `${stream.progress}%` }}
                />
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-text-muted">{stream.progress}% streamed</span>
                <span className="text-xs text-text-secondary">
                  {new Date(stream.startDate).toLocaleDateString()} - {new Date(stream.endDate).toLocaleDateString()}
                </span>
              </div>

              {stream.status === 'active' && (
                <div className="mt-4 glass-light rounded-lg p-3 flex items-center justify-between">
                  <div className="text-sm text-text-secondary">
                    Streaming at {stream.flowRate} {stream.token}/sec
                  </div>
                  <div className="text-sm font-medium text-primary">
                    ~${(parseFloat(stream.flowRate) * 86400).toFixed(2)}/day
                  </div>
                </div>
              )}
            </div>
          ))}

          {streams.length === 0 && (
            <div className="glass-panel rounded-2xl p-12 text-center">
              <p className="text-text-secondary mb-4">No incoming streams yet</p>
              <p className="text-sm text-text-muted">
                When someone starts streaming to your address, it will appear here
              </p>
            </div>
          )}
        </div>

        {/* Transaction History */}
        <div className="mt-12 glass-panel rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">Recent Withdrawals</h2>
          
          <div className="space-y-3">
            {[
              { date: '2024-01-20', amount: '1,400.00', token: 'DAI', txHash: '0x7a8b...' },
              { date: '2024-01-15', amount: '890.00', token: 'USDC', txHash: '0x3c4d...' },
              { date: '2024-01-10', amount: '2,000.00', token: 'USDT', txHash: '0x9e0f...' },
            ].map((tx, index) => (
              <div key={index} className="flex items-center justify-between glass-light rounded-xl p-4">
                <div>
                  <div className="font-medium">{tx.amount} {tx.token}</div>
                  <div className="text-xs text-text-muted">{tx.date}</div>
                </div>
                <a 
                  href="#" 
                  className="text-sm text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Tx ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}