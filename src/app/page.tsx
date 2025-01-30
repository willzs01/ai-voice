"use client";
import React, { useEffect, useState } from 'react';
import { Mail, Settings2, Mic, Calculator, Sparkles, ArrowRight, Volume2, Star, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { WavyBackground } from '@/components/ui/wavy-background';

const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -left-1/4 -bottom-1/4 w-3/4 h-3/4 bg-[#770000]/20 rounded-full blur-3xl" />
      <div className="absolute -right-1/4 -top-1/4 w-3/4 h-3/4 bg-[#770000]/20 rounded-full blur-3xl" />
    </div>
  );
};

const ParticleEffect = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; top: string }>>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-[#E86B5C]/20 rounded-full"
          style={{ left: particle.left, top: particle.top }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity
          }}
        />
      ))}
    </div>
  );
};

const PricingCalculator = () => {
  const [wordCount, setWordCount] = useState(1000);
  const [pricePerWord, setPricePerWord] = useState(0.01);
  
  const totalEarnings = wordCount * pricePerWord;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1A1A1A] backdrop-blur-lg p-8 rounded-xl w-full max-w-md mx-auto mt-12 border border-[#E86B5C]/20"
    >
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#E86B5C] to-[#770000] bg-clip-text text-transparent">Earnings Calculator</h3>
      <div className="space-y-6">
        <div>
          <label className="block text-sm mb-2 text-[#8A93A6]">Word Count</label>
          <input
            type="range"
            min="100"
            max="10000"
            value={wordCount}
            onChange={(e) => setWordCount(Number(e.target.value))}
            className="w-full h-2 bg-[#E86B5C]/20 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right text-sm text-[#8A93A6]">{wordCount} words</div>
        </div>
        
        <div>
          <label className="block text-sm mb-2 text-[#8A93A6]">Price per Word ($)</label>
          <input
            type="range"
            min="0.001"
            max="0.05"
            step="0.001"
            value={pricePerWord}
            onChange={(e) => setPricePerWord(Number(e.target.value))}
            className="w-full h-2 bg-[#E86B5C]/20 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right text-sm text-[#8A93A6]">${pricePerWord.toFixed(3)}</div>
        </div>

        <motion.div 
          className="text-center p-4 bg-[#E86B5C]/20 rounded-lg border border-[#E86B5C]/30"
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-sm text-[#8A93A6]">Potential Earnings</div>
          <div className="text-3xl font-bold bg-gradient-to-r from-[#E86B5C] to-[#770000] bg-clip-text text-transparent">${totalEarnings.toFixed(2)}</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const VoicePrinterLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Natural Voice"
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "Multi-Voice"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI Enhanced"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      text: "VoicePrinter.ai has revolutionized how I create content. The natural-sounding voices are incredible!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Education Professional", 
      text: "Perfect for creating engaging educational content. The multi-voice feature is a game-changer.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Podcast Producer",
      text: "The quality and consistency of the voices are outstanding. Highly recommended!",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "9.99",
      features: ["10,000 words/month", "5 voices", "Basic support"],
      highlighted: false
    },
    {
      name: "Professional", 
      price: "29.99",
      features: ["50,000 words/month", "All voices", "Priority support", "API access"],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "99.99", 
      features: ["Unlimited words", "Custom voices", "24/7 support", "Dedicated manager"],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <WaveBackground />
      <ParticleEffect />
      
      {/* Navigation */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-20">
        <nav className="flex justify-between items-center p-4 backdrop-blur-lg bg-[#18181B]/80 rounded-[20px] border border-white/10">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-[#E86B5C]/20 to-[#770000]/20 p-2 rounded-lg">
              <span className="text-lg font-bold text-white whitespace-nowrap">VoicePrinter.ai</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link className="text-white hover:text-[#E86B5C] transition" href="/features">Features</Link>
            <Link className="text-white hover:text-[#E86B5C] transition" href="/voices">Voices</Link>
            <Link className="text-white hover:text-[#E86B5C] transition" href="/pricing">Pricing</Link>
            <Link className="text-white hover:text-[#E86B5C] transition" href="/faq">FAQ</Link>
            <Link href="/sign-up">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-5 py-1.5 bg-[#E86B5C] text-white rounded-lg font-medium"
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative z-10 md:hidden flex flex-col items-center gap-4 p-4 backdrop-blur-lg bg-[#18181B]/90 border-b border-[#E86B5C]/20"
          >
            <Link className="text-white hover:text-[#E86B5C] transition w-full text-center py-2" href="/features">Features</Link>
            <Link className="text-white hover:text-[#E86B5C] transition w-full text-center py-2" href="/voices">Voices</Link>
            <Link className="text-white hover:text-[#E86B5C] transition w-full text-center py-2" href="/pricing">Pricing</Link>
            <Link className="text-white hover:text-[#E86B5C] transition w-full text-center py-2" href="/faq">FAQ</Link>
            <Link href="/sign-up" className="w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full px-4 py-2 bg-[#E86B5C] text-white rounded-lg font-medium"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 pt-32 md:pt-40 text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#770000]/10 via-[#770000]/5 to-transparent rounded-[40px] blur-3xl" />

          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mb-8 px-4 py-2 bg-[#1A1A1A] backdrop-blur-lg rounded-full text-sm inline-flex items-center gap-2 border border-[#E86B5C]/20"
            >
              <Mail className="w-4 h-4" fill='white' />
              Try For Free
            </motion.button>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold mb-4 text-white"
            >
              Transform Text to Speech
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-3xl font-serif italic mb-6 text-white"
            >
              with AI-Powered Natural Voices
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/80 text-base md:text-lg mb-12 max-w-2xl mx-auto"
            >
              Convert any text into natural-sounding speech with our advanced AI technology.
              Perfect for content creators, educators, and businesses.
            </motion.p>

            <div className="flex justify-center gap-4 mb-16">
              <Link href="/sign-up">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 bg-[#E86B5C] rounded-lg font-medium text-white shadow-[0_0_15px_rgba(232,107,92,0.5)] transition-shadow hover:shadow-[0_0_25px_rgba(232,107,92,0.6)]"
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Left WavyBackground */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-3/4 scale-75 md:scale-100">
            <WavyBackground />
          </div>

          {/* Right WavyBackground */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-3/4 scale-75 md:scale-100">
            <WavyBackground />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-8 relative z-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(232, 107, 92, 0.2)",
                }}
                className="flex items-center gap-2 bg-[#1A1A1A] backdrop-blur-lg px-4 py-2 rounded-lg border border-[#E86B5C]/20"
              >
                {feature.icon}
                <span className="text-white/70 text-sm">{feature.title}</span>
              </motion.div>
            ))}
          </div>
        </div>

      {/* Testimonials Section */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-[#1A1A1A] backdrop-blur-lg p-6 rounded-xl border border-[#E86B5C]/20"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#E86B5C] fill-[#E86B5C]" />
                ))}
              </div>
              <p className="text-white mb-4">{testimonial.text}</p>
              <div className="font-medium text-white">{testimonial.name}</div>
              <div className="text-sm text-[#E86B5C]">{testimonial.role}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <PricingCalculator />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-16">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`p-8 rounded-xl backdrop-blur-lg border ${
              plan.highlighted 
                ? 'bg-gradient-to-b from-[#E86B5C]/20 to-[#770000]/20 border-[#E86B5C]/30' 
                : 'bg-[#1A1A1A] border-[#E86B5C]/20'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">{plan.name}</h3>
            <div className="text-4xl font-bold mb-6 text-white">${plan.price}<span className="text-sm">/month</span></div>
            <ul className="space-y-3">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E86B5C]" />
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="/sign-up">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className={`w-full mt-8 py-3 rounded-lg font-medium ${
                  plan.highlighted
                    ? 'bg-[#E86B5C] text-white'
                    : 'bg-[#1A1A1A] text-white'
                }`}
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t border-[#E86B5C]/20 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">VoicePrinter.ai</h3>
            <p className="text-sm text-gray-400">Transform your text into natural-sounding speech with our advanced AI technology.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-sm text-gray-400 hover:text-white">Features</Link></li>
              <li><Link href="/voices" className="text-sm text-gray-400 hover:text-white">Voices</Link></li>
              <li><Link href="/pricing" className="text-sm text-gray-400 hover:text-white">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link href="/careers" className="text-sm text-gray-400 hover:text-white">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-400 hover:text-white">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400">
          © 2024 VoicePrinter.ai. All rights reserved.
        </div>
      </footer>
      </div>
    </div>
  );
};

export default VoicePrinterLanding;