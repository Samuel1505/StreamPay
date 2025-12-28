import { Wallet, ArrowRight, CircleCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Connect Your Wallet',
    description: 'Link your Web3 wallet to get started. Supports all major wallets.',
  },
  {
    number: '02',
    title: 'Set Up Stream',
    description: 'Define recipient, amount, and duration. Preview your payment schedule.',
  },
  {
    number: '03',
    title: 'Start Streaming',
    description: 'Activate your stream. Money flows automatically every second.',
  },
  {
    number: '04',
    title: 'Manage Anytime',
    description: 'Monitor, pause, or modify your streams with full control.',
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-32 px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Get started with StreamPay in minutes
          </p>
        </div>
        
        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary hidden md:block" />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-8 items-start">
                {/* Step Number */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center border-2 border-primary">
                    <span className="text-xl font-bold text-gradient">{step.number}</span>
                  </div>
                </div>
                
                {/* Step Content */}
                <div className="flex-1 glass-panel rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-3 text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}