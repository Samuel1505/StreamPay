'use client';

import { ArrowRight, Zap } from 'lucide-react';
import { ConnectButton } from './ConnectButton';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 gradient-aurora opacity-50" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 glass-light rounded-full mb-8 text-sm">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-text-secondary">Powered by Blockchain</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-gradient">StreamPay</span>
          <br />
          <span className="text-text-primary">Money Moves</span>
          <br />
          <span className="text-text-secondary">Every Second</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
          Real-time, on-chain streaming for salaries, subscriptions, and rewards. 
          <span className="text-text-primary font-medium"> Your money, instant.</span>
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <ConnectButton />
          
          <button className="inline-flex items-center gap-2 px-6 py-3 glass-light rounded-full font-medium text-text-primary transition-all duration-300 hover:bg-white/10">
            <span>Learn More</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="glass-panel rounded-2xl p-6">
            <div className="text-4xl font-bold text-gradient mb-2">$10M+</div>
            <div className="text-text-secondary">Streamed</div>
          </div>
          <div className="glass-panel rounded-2xl p-6">
            <div className="text-4xl font-bold text-gradient mb-2">50K+</div>
            <div className="text-text-secondary">Active Streams</div>
          </div>
          <div className="glass-panel rounded-2xl p-6">
            <div className="text-4xl font-bold text-gradient mb-2">99.9%</div>
            <div className="text-text-secondary">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}