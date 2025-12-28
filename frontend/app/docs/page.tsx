import { Book, Code, FileText, Blocks, Terminal, Lightbulb, ArrowRight } from 'lucide-react';

const docCategories = [
  {
    icon: Book,
    title: 'Getting Started',
    description: 'Quick start guides and tutorials to get you up and running',
    links: [
      'Installation Guide',
      'First Stream Tutorial',
      'Wallet Setup',
      'Token Approval',
    ],
  },
  {
    icon: Code,
    title: 'API Reference',
    description: 'Complete API documentation for developers',
    links: [
      'REST API',
      'WebSocket Events',
      'GraphQL Queries',
      'Rate Limits',
    ],
  },
  {
    icon: Blocks,
    title: 'Smart Contracts',
    description: 'On-chain contract documentation and ABIs',
    links: [
      'Contract Addresses',
      'Stream Contract ABI',
      'Factory Contract',
      'Security Audit',
    ],
  },
  {
    icon: Terminal,
    title: 'SDK & Libraries',
    description: 'Integration libraries for popular frameworks',
    links: [
      'JavaScript SDK',
      'React Hooks',
      'Python SDK',
      'Go SDK',
    ],
  },
  {
    icon: FileText,
    title: 'Guides',
    description: 'In-depth guides and best practices',
    links: [
      'Stream Management',
      'Gas Optimization',
      'Multi-Chain Setup',
      'Testing Strategies',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Examples',
    description: 'Code examples and sample implementations',
    links: [
      'Payroll System',
      'Subscription App',
      'Vesting Schedule',
      'Grant Distribution',
    ],
  },
];

const quickLinks = [
  {
    title: 'Create Your First Stream',
    description: 'Step-by-step tutorial',
    time: '5 min read',
  },
  {
    title: 'Understanding Stream Parameters',
    description: 'Learn about flow rates and durations',
    time: '10 min read',
  },
  {
    title: 'Multi-Chain Deployment',
    description: 'Deploy across multiple networks',
    time: '15 min read',
  },
  {
    title: 'Security Best Practices',
    description: 'Keep your streams secure',
    time: '8 min read',
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 gradient-aurora opacity-30" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Documentation</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12">
            Everything you need to build with StreamPay
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="glass-panel rounded-full p-2 flex items-center gap-3">
              <input
                type="text"
                placeholder="Search documentation..."
                className="flex-1 bg-transparent border-none outline-none px-4 py-2 text-text-primary placeholder:text-text-muted"
              />
              <button className="px-6 py-2 bg-primary rounded-full text-white font-medium hover:bg-primary-dark transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Popular Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <div
                key={index}
                className="glass-panel rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer group"
              >
                <h3 className="font-bold mb-2 text-text-primary group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-text-secondary mb-3">
                  {link.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-muted">{link.time}</span>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-surface/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Browse Documentation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category, index) => (
              <div
                key={index}
                className="glass-panel rounded-3xl p-8 hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-2xl bg-primary/20 mb-6">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-text-primary">
                  {category.title}
                </h3>
                
                <p className="text-text-secondary mb-6">
                  {category.description}
                </p>
                
                <ul className="space-y-2">
                  {category.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="text-text-secondary hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>{link}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel rounded-2xl p-6 text-center">
              <Code className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-text-primary">GitHub</h3>
              <p className="text-sm text-text-secondary mb-4">
                Explore our open source repositories
              </p>
              <a href="#" className="text-primary hover:underline text-sm">
                View on GitHub →
              </a>
            </div>
            
            <div className="glass-panel rounded-2xl p-6 text-center">
              <Terminal className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-text-primary">CLI Tools</h3>
              <p className="text-sm text-text-secondary mb-4">
                Command-line interface for developers
              </p>
              <a href="#" className="text-primary hover:underline text-sm">
                Install CLI →
              </a>
            </div>
            
            <div className="glass-panel rounded-2xl p-6 text-center">
              <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-text-primary">Discord</h3>
              <p className="text-sm text-text-secondary mb-4">
                Join our developer community
              </p>
              <a href="#" className="text-primary hover:underline text-sm">
                Join Discord →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-panel rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need <span className="text-gradient">Help</span>?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Can't find what you're looking for? Our support team is here to help
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 glass-light rounded-full font-medium text-text-primary transition-all duration-300 hover:bg-white/10">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}