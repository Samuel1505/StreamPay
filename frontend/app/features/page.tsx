import { Clock, Shield, TrendingUp, Zap, Lock, Globe, Users, DollarSign } from 'lucide-react';

const allFeatures = [
  {
    icon: Clock,
    title: 'Real-Time Streaming',
    description: 'Money flows every second, not monthly. Watch your balance update in real-time with sub-second precision.',
    benefits: ['Second-by-second payments', 'Live balance updates', 'No waiting periods'],
  },
  {
    icon: Zap,
    title: 'Instant Settlement',
    description: 'No waiting periods. Funds are available immediately as they stream into your wallet.',
    benefits: ['Zero settlement delays', 'Immediate access', 'Real-time liquidity'],
  },
  {
    icon: Shield,
    title: 'Secure & Trustless',
    description: 'Built on blockchain technology. No intermediaries, no delays, complete transparency.',
    benefits: ['Decentralized protocol', 'Immutable transactions', 'Full transparency'],
  },
  {
    icon: TrendingUp,
    title: 'Flexible Streams',
    description: 'Pause, resume, or modify payment streams anytime. Full control in your hands.',
    benefits: ['Pause/resume anytime', 'Adjustable rates', 'Cancel without penalty'],
  },
  {
    icon: Lock,
    title: 'Non-Custodial',
    description: 'You maintain full control of your funds at all times. Your keys, your crypto.',
    benefits: ['Self-custody always', 'No intermediaries', 'Full ownership'],
  },
  {
    icon: Globe,
    title: 'Multi-Chain Support',
    description: 'Stream payments across multiple blockchains including Ethereum, Polygon, Arbitrum, and more.',
    benefits: ['Cross-chain compatible', 'Low gas fees', 'Network flexibility'],
  },
  {
    icon: Users,
    title: 'Team Management',
    description: 'Manage multiple streams for your entire team from a single dashboard.',
    benefits: ['Bulk operations', 'Role-based access', 'Team analytics'],
  },
  {
    icon: DollarSign,
    title: 'Token Agnostic',
    description: 'Stream any ERC-20 token. Support for stablecoins, governance tokens, and more.',
    benefits: ['Multiple tokens', 'Stablecoin support', 'Custom tokens'],
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 gradient-aurora opacity-30" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Powerful <span className="text-gradient">Features</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
            Everything you need to manage real-time payment streams with confidence
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allFeatures.map((feature, index) => (
              <div
                key={index}
                className="glass-panel rounded-3xl p-8 hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-2xl bg-primary/20 mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-text-primary">
                  {feature.title}
                </h3>
                
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-text-secondary">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-panel rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience <span className="text-gradient">StreamPay</span>?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Join thousands of users streaming payments on-chain
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}