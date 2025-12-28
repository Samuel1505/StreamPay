'use client';

import { useState } from 'react';
import { Play, Pause, X, Edit, MoreVertical, TrendingUp } from 'lucide-react';
import Link from 'next/link';

type StreamStatus = 'active' | 'paused' | 'completed' | 'cancelled';

const mockStreams = [
  {
    id: 1,
    recipient: '0x742d35Cc6634C0532925a3b844Bc9e7595f4e29',
    recipientName: 'John Doe',
    token: 'USDC',
    flowRate: '0.05',
    totalAmount: '5000.00',
    streamed: '3250.00',
    startDate: '2024-01-01',
    endDate: '2024-02-01',
    status: 'active' as StreamStatus,
    progress: 65,
  },
  {
    id: 2,
    recipient: '0x9a3b8f2c1d4e5a6b7c8d9e0f1a2b3c4d5e6f7a8b',
    recipientName: 'Jane Smith',
    token: 'DAI',
    flowRate: '0.03',
    totalAmount: '3200.00',
    streamed: '1344.00',
    startDate: '2024-01-15',
    endDate: '2024-02-15',
    status: 'active' as StreamStatus,
    progress: 42,
  },
  {
    id: 3,
    recipient: '0x1f8d2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f',
    recipientName: 'Bob Johnson',
    token: 'USDC',
    flowRate: '0.02',
    totalAmount: '2000.00',
    streamed: '2000.00',
    startDate: '2023-12-01',
    endDate: '2024-01-01',
    status: 'completed' as StreamStatus,
    progress: 100,
  },
  {
    id: 4,
    recipient: '0x5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f',
    recipientName: 'Alice Williams',
    token: 'USDT',
    flowRate: '0.08',
    totalAmount: '8500.00',
    streamed: '6800.00',
    startDate: '2024-01-10',
    endDate: '2024-02-10',
    status: 'paused' as StreamStatus,
    progress: 80,
  },
];

export default function MyStreamsPage() {
  const [filter, setFilter] = useState<'all' | StreamStatus>('all');
  const [streams] = useState(mockStreams);

  const filteredStreams = filter === 'all' 
    ? streams 
    : streams.filter(s => s.status === filter);

  const getStatusColor = (status: StreamStatus) => {
    switch (status) {
      case 'active': return 'bg-success/20 text-success';
      case 'paused': return 'bg-warning/20 text-warning';
      case 'completed': return 'bg-primary/20 text-primary';
      case 'cancelled': return 'bg-text-muted/20 text-text-muted';
      default: return 'bg-text-muted/20 text-text-muted';
    }
  };

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">My Streams</h1>
            <p className="text-text-secondary">Manage your outgoing payment streams</p>
          </div>
          <Link 
            href="/create-stream"
            className="px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-full font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105"
          >
            + Create Stream
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="glass-panel rounded-2xl p-6">
            <div className="text-3xl font-bold mb-1">{streams.filter(s => s.status === 'active').length}</div>
            <div className="text-sm text-text-secondary">Active Streams</div>
          </div>
          <div className="glass-panel rounded-2xl p-6">
            <div className="text-3xl font-bold mb-1">
              ${streams.reduce((acc, s) => acc + parseFloat(s.streamed), 0).toFixed(2)}
            </div>
            <div className="text-sm text-text-secondary">Total Streamed</div>
          </div>
          <div className="glass-panel rounded-2xl p-6">
            <div className="text-3xl font-bold mb-1">
              {streams.filter(s => s.status === 'paused').length}
            </div>
            <div className="text-sm text-text-secondary">Paused Streams</div>
          </div>
          <div className="glass-panel rounded-2xl p-6">
            <div className="text-3xl font-bold mb-1">
              {streams.filter(s => s.status === 'completed').length}
            </div>
            <div className="text-sm text-text-secondary">Completed</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
          {(['all', 'active', 'paused', 'completed', 'cancelled'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                filter === status
                  ? 'bg-primary text-white'
                  : 'glass-light text-text-secondary hover:bg-white/10'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* Streams List */}
        <div className="space-y-4">
          {filteredStreams.map((stream) => (
            <div key={stream.id} className="glass-panel rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-lg">{stream.recipientName || 'Unknown'}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(stream.status)}`}>
                      {stream.status.charAt(0).toUpperCase() + stream.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary font-mono">{stream.recipient}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  {stream.status === 'active' && (
                    <button className="p-2 glass-light rounded-lg hover:bg-white/10 transition-all">
                      <Pause className="w-5 h-5 text-warning" />
                    </button>
                  )}
                  {stream.status === 'paused' && (
                    <button className="p-2 glass-light rounded-lg hover:bg-white/10 transition-all">
                      <Play className="w-5 h-5 text-success" />
                    </button>
                  )}
                  <button className="p-2 glass-light rounded-lg hover:bg-white/10 transition-all">
                    <Edit className="w-5 h-5 text-text-secondary" />
                  </button>
                  <button className="p-2 glass-light rounded-lg hover:bg-white/10 transition-all">
                    <X className="w-5 h-5 text-text-muted" />
                  </button>
                  <button className="p-2 glass-light rounded-lg hover:bg-white/10 transition-all">
                    <MoreVertical className="w-5 h-5 text-text-secondary" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <div className="text-xs text-text-muted mb-1">Flow Rate</div>
                  <div className="font-medium">{stream.flowRate} {stream.token}/sec</div>
                </div>
                <div>
                  <div className="text-xs text-text-muted mb-1">Total Amount</div>
                  <div className="font-medium">{stream.totalAmount} {stream.token}</div>
                </div>
                <div>
                  <div className="text-xs text-text-muted mb-1">Streamed</div>
                  <div className="font-medium text-primary">{stream.streamed} {stream.token}</div>
                </div>
                <div>
                  <div className="text-xs text-text-muted mb-1">Duration</div>
                  <div className="font-medium text-sm">
                    {new Date(stream.startDate).toLocaleDateString()} - {new Date(stream.endDate).toLocaleDateString()}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 bg-surface rounded-full overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent rounded-full transition-all"
                  style={{ width: `${stream.progress}%` }}
                />
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-text-muted">{stream.progress}% completed</span>
                <div className="flex items-center gap-1 text-xs text-success">
                  <TrendingUp className="w-3 h-3" />
                  <span>Streaming</span>
                </div>
              </div>
            </div>
          ))}

          {filteredStreams.length === 0 && (
            <div className="glass-panel rounded-2xl p-12 text-center">
              <p className="text-text-secondary mb-4">No streams found</p>
              <Link 
                href="/create-stream"
                className="inline-block px-6 py-3 glass-light rounded-full font-medium hover:bg-white/10 transition-all"
              >
                Create Your First Stream
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}