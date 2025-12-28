import { Briefcase, Users, Trophy, Building2, Repeat, Coins, Code, Heart } from 'lucide-react';

const solutions = [
  {
    icon: Briefcase,
    category: 'Payroll',
    title: 'Real-Time Salaries',
    description: 'Transform how you pay your team. Stream salaries in real-time so employees get paid as they work, not at month-end.',
    features: [
      'Pay by the second',
      'Eliminate payroll delays',
      'Automated distribution',
      'Multi-currency support',
      'Instant withdrawal',
    ],
    useCase: 'A remote team of 50 people gets paid continuously throughout the month, improving cash flow and employee satisfaction.',
  },
  {
    icon: Users,
    category: 'Subscriptions',
    title: 'Continuous Subscriptions',
    description: 'Build subscription products with per-second billing. No more upfront monthly charges or refund hassles.',
    features: [
      'Pay-per-use model',
      'Cancel anytime',
      'No upfront costs',
      'Fair billing',
      'Reduced churn',
    ],
    useCase: 'A SaaS platform charges users by the second of actual usage, reducing friction and improving retention.',
  },
  {
    icon: Trophy,
    category: 'Rewards',
    title: 'Token Vesting',
    description: 'Stream rewards and vesting schedules. Perfect for liquidity mining, staking rewards, and team token vesting.',
    features: [
      'Linear vesting',
      'Cliff support',
      'Milestone-based',
      'Transparent tracking',
      'Automated distribution',
    ],
    useCase: 'A DeFi protocol distributes governance tokens to liquidity providers continuously over time.',
  },
  {
    icon: Building2,
    category: 'Enterprise',
    title: 'B2B Payments',
    description: 'Streamline business payments between companies. Improve cash flow with continuous settlement.',
    features: [
      'Invoice streaming',
      'Automated reconciliation',
      'Multi-party support',
      'Audit trails',
      'Compliance ready',
    ],
    useCase: 'Companies pay suppliers continuously based on delivery milestones, improving working capital.',
  },
  {
    icon: Repeat,
    category: 'Rentals',
    title: 'Rent & Leasing',
    description: 'Modern rent collection with daily or hourly streaming. Flexible terms for tenants and landlords.',
    features: [
      'Daily rent streams',
      'Flexible terms',
      'Instant settlement',
      'No late fees',
      'Transparent balance',
    ],
    useCase: 'Tenants pay rent daily instead of monthly, making budgeting easier and reducing late payments.',
  },
  {
    icon: Coins,
    category: 'Grants',
    title: 'Grant Distribution',
    description: 'Distribute grants and funding continuously. Ensure accountability with milestone-based streaming.',
    features: [
      'Milestone releases',
      'Performance based',
      'Transparent tracking',
      'Automated reporting',
      'Fund recovery',
    ],
    useCase: 'A DAO streams grants to projects based on completion of predefined milestones.',
  },
  {
    icon: Code,
    category: 'Developers',
    title: 'API & Services',
    description: 'Monetize APIs and cloud services with per-second billing. Pay only for what you use.',
    features: [
      'Usage-based pricing',
      'Real-time metering',
      'Auto-scaling costs',
      'No minimum fees',
      'Instant payouts',
    ],
    useCase: 'Developers pay for API calls and compute resources by the second, optimizing costs.',
  },
  {
    icon: Heart,
    category: 'Donations',
    title: 'Recurring Donations',
    description: 'Enable supporters to stream donations continuously to causes they care about.',
    features: [
      'Ongoing support',
      'Transparent impact',
      'Easy cancellation',
      'Tax receipts',
      'Donor analytics',
    ],
    useCase: 'Supporters stream small amounts continuously to charities, building sustainable funding.',
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 gradient-aurora opacity-30" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Solutions for <span className="text-gradient">Everyone</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
            From startups to enterprises, StreamPay adapts to your payment streaming needs
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="glass-panel rounded-3xl p-8 hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex p-4 rounded-2xl bg-primary/20">
                    <solution.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="px-3 py-1 glass-light rounded-full text-xs font-medium text-primary">
                    {solution.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-text-primary">
                  {solution.title}
                </h3>
                
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text-primary mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-text-secondary text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-text-muted italic">
                    <span className="font-semibold text-text-secondary">Use Case:</span> {solution.useCase}
                  </p>
                </div>
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
              Find Your <span className="text-gradient">Solution</span>
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Need a custom solution? Let's talk about your specific use case
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105">
                Get Started
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 glass-light rounded-full font-medium text-text-primary transition-all duration-300 hover:bg-white/10">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}