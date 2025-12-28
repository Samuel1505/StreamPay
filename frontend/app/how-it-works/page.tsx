import { Wallet, Settings, Play, Activity, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Connect Your Wallet',
    description: 'Link your Web3 wallet to StreamPay. We support all major wallets including MetaMask, WalletConnect, Coinbase Wallet, and more.',
    icon: Wallet,
    details: [
      'One-click wallet connection',
      'Multi-wallet support',
      'Secure authentication',
    ],
  },
  {
    number: '02',
    title: 'Configure Stream',
    description: 'Set up your payment stream parameters including recipient address, token type, amount, and duration.',
    icon: Settings,
    details: [
      'Choose any ERC-20 token',
      'Set custom flow rates',
      'Define start and end dates',
    ],
  },
  {
    number: '03',
    title: 'Activate Stream',
    description: 'Review your stream configuration and activate it with a single transaction. Money starts flowing immediately.',
    icon: Play,
    details: [
      'One-time approval',
      'Instant activation',
      'Low gas fees',
    ],
  },
  {
    number: '04',
    title: 'Monitor & Manage',
    description: 'Track your active streams in real-time. Pause, resume, or modify streams anytime with full control.',
    icon: Activity,
    details: [
      'Real-time dashboards',
      'Pause/resume anytime',
      'Modify stream rates',
    ],
  },
];

const technicalSteps = [
  {
    title: 'Smart Contract Initialization',
    description: 'StreamPay creates a unique smart contract instance for your payment stream with immutable parameters.',
  },
  {
    title: 'Token Approval',
    description: 'You approve the StreamPay contract to manage the specified amount of tokens for the stream duration.',
  },
  {
    title: 'Continuous Streaming',
    description: 'The smart contract automatically calculates and releases tokens to the recipient every second based on the flow rate.',
  },
  {
    title: 'Real-Time Settlement',
    description: 'Recipients can withdraw their earned tokens at any time, with balances updating in real-time on-chain.',
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 gradient-aurora opacity-30" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            How <span className="text-gradient">StreamPay</span> Works
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
            Simple setup, powerful technology. Start streaming payments in minutes.
          </p>
        </div>
      </section>

      {/* User Steps */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Getting Started is <span className="text-gradient">Easy</span>
          </h2>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-linear-to-b from-primary via-accent to-secondary hidden md:block" />
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-8 items-start">
                  {/* Step Number & Icon */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center border-2 border-primary mb-4">
                      <span className="text-xl font-bold text-gradient">{step.number}</span>
                    </div>
                    <div className="inline-flex p-3 rounded-xl bg-primary/20">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1 glass-panel rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-3 text-text-primary">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-lg mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-text-secondary">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Overview */}
      <section className="py-20 px-6 bg-linear-to-b from-transparent via-surface/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Under the <span className="text-gradient">Hood</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Built on battle-tested smart contract technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSteps.map((step, index) => (
              <div key={index} className="glass-panel rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-text-primary">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-panel rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient">Stream</span>?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Start streaming payments in less than 5 minutes
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}