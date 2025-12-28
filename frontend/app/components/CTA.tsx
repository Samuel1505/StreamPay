'use client';

import { ArrowRight } from 'lucide-react';
import { ConnectButton } from './ConnectButton';

export function CTA() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="glass-panel rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-accent/10 to-transparent" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start <span className="text-gradient">Streaming</span>?
            </h2>
            
            <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
              Join thousands of users already streaming payments on-chain. 
              Connect your wallet and experience the future of payments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConnectButton />
              
              <button className="inline-flex items-center gap-2 px-6 py-3 glass-light rounded-full font-medium text-text-primary transition-all duration-300 hover:bg-white/10">
                <span>View Documentation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}