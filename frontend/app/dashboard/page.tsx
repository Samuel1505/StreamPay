'use client';

import { TrendingUp, TrendingDown, Activity, DollarSign, Users, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

const stats = [
  {
    label: 'Total Streaming',
    value: '$12,450.00',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
  },
  {
    label: 'Active Streams',
    value: '24',
    change: '+3',
    trend: 'up',
    icon: Activity,
  },
  {
    label: 'Recipients',
    value: '18',
    change: '+2',
    trend: 'up',
    icon: Users,
  },
  {
    label: 'Avg. Flow Rate',
    value: '$0.14/sec',
    change: '-5.2%',
    trend: 'down',
    icon: Clock,
  },
];

const recentStreams = [
  {
    recipient: '0x742d...4e29',
    token: 'USDC',
    amount: '5,000',
    flowRate: '0.05',
    status: 'active',
    progress: 65,
  },
  {
    recipient: '0x9a3b...7c12',
    token: 'DAI',
    amount: '3,200',
    flowRate: '0.03',
    status: 'active',
    progress: 42,
  },
  {
    recipient: '0x1f8d...2a45',
    token: 'USDT',
    amount: '8,500',
    flowRate: '0.08',
    status: 'active',
    progress: 88,
  },
];

const receivedStreams = [
  {
    sender: '0x4d2a...9b31',
    token: 'USDC',
    received: '2,340',
    flowRate: '0.02',
    status: 'active',
  },
  {
    sender: '0x7e5c...1d82',
    token: 'DAI',
    received: '1,850',
    flowRate: '0.015',
    status: 'active',
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-text-secondary">Welcome back! Here's your streaming overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="glass-panel rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/20">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${stat.trend === 'up' ? 'text-success' : 'text-warning'}`}>
                  {stat.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Outgoing Streams */}
          <div className="glass-panel rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Outgoing Streams</h2>
              <Link href="/my-streams" className="text-primary hover:underline text-sm">
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {recentStreams.map((stream, index) => (
                <div key={index} className="glass-light rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-medium text-text-primary mb-1">
                        To {stream.recipient}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {stream.flowRate} {stream.token}/sec
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-text-primary">
                        {stream.amount} {stream.token}
                      </div>
                      <div className="text-xs px-2 py-1 rounded-full bg-success/20 text-success">
                        Active
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative h-2 bg-surface rounded-full overflow-hidden">
                    <div 
                      className="absolute inset-y-0 left-0 bg-linear-to-r from-primary to-accent rounded-full"
                      style={{ width: `${stream.progress}%` }}
                    />
                  </div>
                  <div className="text-xs text-text-muted mt-1">{stream.progress}% completed</div>
                </div>
              ))}
            </div>

            <Link 
              href="/create-stream"
              className="mt-6 flex items-center justify-center gap-2 w-full py-3 glass-light rounded-full text-primary hover:bg-white/10 transition-all"
            >
              <span>Create New Stream</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Incoming Streams */}
          <div className="glass-panel rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Incoming Streams</h2>
              <Link href="/received" className="text-primary hover:underline text-sm">
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {receivedStreams.map((stream, index) => (
                <div key={index} className="glass-light rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-medium text-text-primary mb-1">
                        From {stream.sender}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {stream.flowRate} {stream.token}/sec
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-text-primary">
                        {stream.received} {stream.token}
                      </div>
                      <div className="text-xs px-2 py-1 rounded-full bg-success/20 text-success">
                        Active
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full py-2 bg-primary/20 rounded-lg text-primary font-medium hover:bg-primary/30 transition-colors">
                    Withdraw Available
                  </button>
                </div>
              ))}

              <div className="glass-light rounded-xl p-6 text-center border-2 border-dashed border-border">
                <p className="text-text-secondary text-sm">
                  No other incoming streams
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 glass-panel rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              href="/create-stream"
              className="glass-light rounded-2xl p-6 hover:bg-white/10 transition-all group"
            >
              <div className="text-3xl mb-3">💸</div>
              <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                Create Stream
              </h3>
              <p className="text-sm text-text-secondary">
                Start streaming payments to anyone
              </p>
            </Link>

            <Link 
              href="/my-streams"
              className="glass-light rounded-2xl p-6 hover:bg-white/10 transition-all group"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                Manage Streams
              </h3>
              <p className="text-sm text-text-secondary">
                View and control your active streams
              </p>
            </Link>

            <Link 
              href="/analytics"
              className="glass-light rounded-2xl p-6 hover:bg-white/10 transition-all group"
            >
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                View Analytics
              </h3>
              <p className="text-sm text-text-secondary">
                Track your streaming metrics
              </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}