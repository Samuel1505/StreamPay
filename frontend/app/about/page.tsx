import { Target, Users, Zap, Shield, Globe, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission Driven',
    description: 'We believe in democratizing access to real-time payments and making financial systems more efficient.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Built on audited smart contracts with security as the foundation of everything we do.',
  },
  {
    icon: Globe,
    title: 'Decentralized',
    description: 'Truly trustless and permissionless. No intermediaries, no central points of failure.',
  },
  {
    icon: Heart,
    title: 'Community Focused',
    description: 'Governed by our community of users, developers, and token holders.',
  },
];

const stats = [
  { value: '$10M+', label: 'Total Value Streamed' },
  { value: '50K+', label: 'Active Streams' },
  { value: '100+', label: 'Countries' },
  { value: '99.9%', label: 'Uptime' },
];

const team = [
  {
    role: 'Core Development',
    description: 'Building the future of payment streaming with cutting-edge Web3 technology.',
  },
  {
    role: 'Security & Audits',
    description: 'Ensuring our smart contracts are battle-tested and secure.',
  },
  {
    role: 'Community & Growth',
    description: 'Growing our ecosystem and supporting our global community.',
  },
  {
    role: 'Research & Innovation',
    description: 'Exploring new possibilities in DeFi and payment infrastructure.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 gradient-aurora opacity-30" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            About <span className="text-gradient">StreamPay</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
            Reimagining how value flows on-chain by creating a truly autonomous payment streaming protocol
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-3xl p-12 text-center">
            <div className="inline-flex p-4 rounded-2xl bg-primary/20 mb-6">
              <Zap className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-6">
              StreamPay is building the infrastructure for real-time value transfer on the blockchain. 
              We envision a world where payments happen continuously, not in discrete chunks, 
              enabling new business models and fairer compensation structures.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              By removing the artificial constraints of monthly or daily payments, we're creating 
              a more fluid and efficient financial system that better reflects the continuous nature 
              of work, consumption, and value creation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-surface/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="glass-panel rounded-2xl p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-gradient">Values</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-panel rounded-3xl p-8 hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-2xl bg-primary/20 mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-text-primary">
                  {value.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-surface/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Built by a <span className="text-gradient">Global Team</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              We're a distributed team of engineers, designers, and blockchain enthusiasts 
              passionate about building the future of payments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <div key={index} className="glass-panel rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2 text-text-primary">
                  {member.role}
                </h3>
                <p className="text-text-secondary">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Powered by <span className="text-gradient">Blockchain</span>
            </h2>
            <p className="text-xl text-text-secondary text-center max-w-3xl mx-auto mb-8">
              StreamPay is built on Ethereum and compatible EVM chains, leveraging smart contracts 
              to enable trustless, transparent, and unstoppable payment streams.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="glass-light rounded-xl p-4">
                <div className="font-bold text-text-primary mb-1">Ethereum</div>
                <div className="text-sm text-text-secondary">Mainnet</div>
              </div>
              <div className="glass-light rounded-xl p-4">
                <div className="font-bold text-text-primary mb-1">Polygon</div>
                <div className="text-sm text-text-secondary">Low Fees</div>
              </div>
              <div className="glass-light rounded-xl p-4">
                <div className="font-bold text-text-primary mb-1">Arbitrum</div>
                <div className="text-sm text-text-secondary">Layer 2</div>
              </div>
              <div className="glass-light rounded-xl p-4">
                <div className="font-bold text-text-primary mb-1">Optimism</div>
                <div className="text-sm text-text-secondary">Scalable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-panel rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the <span className="text-gradient">Movement</span>
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Be part of the future of payments. Start streaming today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105">
                Get Started
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 glass-light rounded-full font-medium text-text-primary transition-all duration-300 hover:bg-white/10">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}