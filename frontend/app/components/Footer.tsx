import { Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-20 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">StreamPay</span>
            </div>
            <p className="text-text-secondary max-w-sm">
              Real-time payment streaming protocol. Moving money every second, not every month.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">How it works</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Use cases</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            © 2025 StreamPay. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm">Privacy</a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm">Terms</a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}