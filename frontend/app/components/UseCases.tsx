import { Briefcase, Users, Trophy } from 'lucide-react';

const useCases = [
  {
    icon: Briefcase,
    title: 'Salaries & Payroll',
    description: 'Pay your team in real-time. No more monthly wait times. Employees get paid as they work.',
    features: ['Instant payments', 'Automated distribution', 'Tax compliant'],
  },
  {
    icon: Users,
    title: 'Subscriptions',
    description: 'Create recurring payment streams for services, memberships, and SaaS products.',
    features: ['Flexible billing', 'Auto-renewal', 'Easy cancellation'],
  },
  {
    icon: Trophy,
    title: 'Rewards & Vesting',
    description: 'Stream tokens for liquidity mining, staking rewards, and team vesting schedules.',
    features: ['Linear vesting', 'Milestone based', 'Transparent tracking'],
  },
];

export function UseCases() {
  return (
    <section className="relative py-32 px-6 bg-linear-to-b from-transparent via-surface/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Built For <span className="text-gradient">Everyone</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            From startups to enterprises, StreamPay adapts to your needs
          </p>
        </div>
        
        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="glass-panel rounded-3xl p-8 hover:bg-white/8 transition-all duration-300"
            >
              <div className="inline-flex p-4 rounded-2xl bg-primary/20 mb-6">
                <useCase.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-text-primary">
                {useCase.title}
              </h3>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                {useCase.description}
              </p>
              
              <ul className="space-y-2">
                {useCase.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-text-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}