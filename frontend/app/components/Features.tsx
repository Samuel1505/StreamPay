import { Clock, Shield, TrendingUp, Zap } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Real-Time Streaming',
    description: 'Money flows every second, not monthly. Watch your balance update in real-time.',
    gradient: 'from-primary to-secondary',
  },
  {
    icon: Zap,
    title: 'Instant Settlement',
    description: 'No waiting periods. Funds are available immediately as they stream.',
    gradient: 'from-accent to-primary',
  },
  {
    icon: Shield,
    title: 'Secure & Trustless',
    description: 'Built on blockchain. No intermediaries, no delays, complete transparency.',
    gradient: 'from-secondary to-success',
  },
  {
    icon: TrendingUp,
    title: 'Flexible Streams',
    description: 'Pause, resume, or modify payment streams anytime. Full control in your hands.',
    gradient: 'from-warning to-primary',
  },
];

export function Features() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Why <span className="text-gradient">StreamPay</span>?
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Reimagining how value flows on-chain with truly autonomous payment streaming
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-panel rounded-3xl p-8 hover:bg-white/8 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-text-primary">
                {feature.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}