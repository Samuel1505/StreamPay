'use client';

import { TrendingUp, TrendingDown, DollarSign, Activity, Users, Calendar } from 'lucide-react';

const stats = [
  {
    label: 'Total Volume',
    value: '$45,230.00',
    change: '+18.2%',
    trend: 'up',
    period: 'vs last month',
  },
  {
    label: 'Active Streams',
    value: '24',
    change: '+3',
    trend: 'up',
    period: 'this month',
  },
  {
    label: 'Avg. Stream Size',
    value: '$1,885',
    change: '-5.3%',
    trend: 'down',
    period: 'vs last month',
  },
  {
    label: 'Total Recipients',
    value: '18',
    change: '+2',
    trend: 'up',
    period: 'this month',
  },
];

const topRecipients = [
  { name: 'John Doe', address: '0x742d...4e29', amount: '12,450', streams: 5, token: 'USDC' },
  { name: 'Jane Smith', address: '0x9a3b...7c12', amount: '8,320', streams: 3, token: 'DAI' },
  { name: 'Bob Johnson', address: '0x1f8d...2a45', amount: '6,180', streams: 4, token: 'USDC' },
  { name: 'Alice Williams', address: '0x5e6f...3e4f', amount: '5,920', streams: 2, token: 'USDT' },
];

const monthlyData = [
  { month: 'Aug', amount: 28500 },
  { month: 'Sep', amount: 32100 },
  { month: 'Oct', amount: 35800 },
  { month: 'Nov', amount: 38200 },
  { month: 'Dec', amount: 42300 },
  { month: 'Jan', amount: 45230 },
];

export default function AnalyticsPage() {
  const maxAmount = Math.max(...monthlyData.map(d => d.amount));

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Analytics</h1>
          <p className="text-text-secondary">Track your streaming metrics and performance</p>
        </div>

        {/* Time Filter */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {['7 Days', '30 Days', '90 Days', '1 Year', 'All Time'].map((period) => (
            <button
              key={period}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                period === '30 Days'
                  ? 'bg-primary text-white'
                  : 'glass-light text-text-secondary hover:bg-white/10'
              }`}
            >
              {period}
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="glass-panel rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="text-sm text-text-secondary">{stat.label}</div>
                <div className={`flex items-center gap-1 text-xs ${
                  stat.trend === 'up' ? 'text-success' : 'text-warning'
                }`}>
                  {stat.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs text-text-muted">{stat.period}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Volume Chart */}
          <div className="glass-panel rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Streaming Volume</h2>
              <div className="flex items-center gap-2 text-sm text-success">
                <TrendingUp className="w-4 h-4" />
                <span>+18.2%</span>
              </div>
            </div>

            <div className="space-y-4">
              {monthlyData.map((data, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">{data.month}</span>
                    <span className="font-medium">${(data.amount / 1000).toFixed(1)}K</span>
                  </div>
                  <div className="relative h-3 bg-surface rounded-full overflow-hidden">
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent rounded-full transition-all"
                      style={{ width: `${(data.amount / maxAmount) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Distribution */}
          <div className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">Token Distribution</h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">USDC</span>
                  <span className="text-sm text-text-secondary">48%</span>
                </div>
                <div className="relative h-3 bg-surface rounded-full overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent rounded-full w-[48%]" />
                </div>
                <div className="text-xs text-text-muted mt-1">$21,710</div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">DAI</span>
                  <span className="text-sm text-text-secondary">32%</span>
                </div>
                <div className="relative h-3 bg-surface rounded-full overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-secondary to-primary rounded-full w-[32%]" />
                </div>
                <div className="text-xs text-text-muted mt-1">$14,474</div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">USDT</span>
                  <span className="text-sm text-text-secondary">20%</span>
                </div>
                <div className="relative h-3 bg-surface rounded-full overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent to-secondary rounded-full w-[20%]" />
                </div>
                <div className="text-xs text-text-muted mt-1">$9,046</div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="font-bold">Total</span>
                <span className="font-bold text-primary text-xl">$45,230</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Recipients */}
        <div className="glass-panel rounded-3xl p-8 mb-6">
          <h2 className="text-2xl font-bold mb-6">Top Recipients</h2>
          
          <div className="space-y-3">
            {topRecipients.map((recipient, index) => (
              <div key={index} className="glass-light rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                    #{index + 1}
                  </div>
                  <div>
                    <div className="font-medium">{recipient.name}</div>
                    <div className="text-xs text-text-secondary font-mono">{recipient.address}</div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="font-bold text-lg">${recipient.amount}</div>
                  <div className="text-xs text-text-secondary">{recipient.streams} streams • {recipient.token}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel rounded-2xl p-6 text-center">
            <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">$156.80</div>
            <div className="text-sm text-text-secondary">Avg. Daily Volume</div>
          </div>

          <div className="glass-panel rounded-2xl p-6 text-center">
            <Activity className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">14.5 days</div>
            <div className="text-sm text-text-secondary">Avg. Stream Duration</div>
          </div>

          <div className="glass-panel rounded-2xl p-6 text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">1.33</div>
            <div className="text-sm text-text-secondary">Streams per Recipient</div>
          </div>
        </div>
      </div>
    </main>
  );
}