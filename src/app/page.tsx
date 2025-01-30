"use client";
import React, { useEffect, useState } from 'react';
import { Mail, Settings2, Mic, Calculator, Sparkles, ArrowRight, Volume2, Star, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -left-1/4 -bottom-1/4 w-3/4 h-3/4 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute -right-1/4 -top-1/4 w-3/4 h-3/4 bg-purple-500/20 rounded-full blur-3xl" />
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
          className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
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
      className="bg-zinc-900/50 backdrop-blur-lg p-8 rounded-xl w-full max-w-md mx-auto mt-12 border border-purple-500/20"
    >
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Earnings Calculator</h3>
      <div className="space-y-6">
        <div>
          <label className="block text-sm mb-2 text-purple-200">Word Count</label>
          <input
            type="range"
            min="100"
            max="10000"
            value={wordCount}
            onChange={(e) => setWordCount(Number(e.target.value))}
            className="w-full h-2 bg-purple-500/20 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right text-sm text-purple-200">{wordCount} words</div>
        </div>
        
        <div>
          <label className="block text-sm mb-2 text-purple-200">Price per Word ($)</label>
          <input
            type="range"
            min="0.001"
            max="0.05"
            step="0.001"
            value={pricePerWord}
            onChange={(e) => setPricePerWord(Number(e.target.value))}
            className="w-full h-2 bg-purple-500/20 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right text-sm text-purple-200">${pricePerWord.toFixed(3)}</div>
        </div>

        <motion.div 
          className="text-center p-4 bg-purple-500/20 rounded-lg border border-purple-500/30"
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-sm text-purple-200">Potential Earnings</div>
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">${totalEarnings.toFixed(2)}</div>
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
      <nav className="relative z-20 flex justify-between items-center p-4 md:p-6 backdrop-blur-lg bg-black/20">
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-2 md:p-3 rounded-lg">
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent whitespace-nowrap">VoicePrinter.ai</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-gray-400 hover:text-purple-400 transition" href="/features">Features</Link>
          <Link className="text-gray-400 hover:text-purple-400 transition" href="/voices">Voices</Link>
          <Link className="text-gray-400 hover:text-purple-400 transition" href="/pricing">Pricing</Link>
          <Link className="text-gray-400 hover:text-purple-400 transition" href="/faq">FAQ</Link>
          <Link href="/sign-up">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium"
            >
              Start Converting
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-purple-400" />
          ) : (
            <Menu className="w-6 h-6 text-purple-400" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative z-10 md:hidden flex flex-col items-center gap-4 p-4 backdrop-blur-lg bg-black/90 border-b border-purple-500/20"
          >
            <Link className="text-gray-400 hover:text-purple-400 transition w-full text-center py-2" href="/features">Features</Link>
            <Link className="text-gray-400 hover:text-purple-400 transition w-full text-center py-2" href="/voices">Voices</Link>
            <Link className="text-gray-400 hover:text-purple-400 transition w-full text-center py-2" href="/pricing">Pricing</Link>
            <Link className="text-gray-400 hover:text-purple-400 transition w-full text-center py-2" href="/faq">FAQ</Link>
            <Link href="/sign-up" className="w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium"
              >
                Start Converting
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-24 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mb-8 px-4 py-2 bg-zinc-900/80 backdrop-blur-lg rounded-full text-sm inline-flex items-center gap-2 border border-purple-500/20"
        >
          <Mail className="w-4 h-4" />
          Try For Free
        </motion.button>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Transform Text to Speech
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-4xl font-serif italic mb-6 text-purple-200"
        >
          with AI-Powered Natural Voices
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-purple-200 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
        >
          Convert any text into natural-sounding speech with our advanced AI technology.
          Perfect for content creators, educators, and businesses.
        </motion.p>

        <div className="flex justify-center gap-4 mb-16">
          <Link href="/sign-up">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium"
            >
              Start Converting
            </motion.button>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(168, 85, 247, 0.2)",
              }}
              className="flex items-center gap-2 bg-zinc-900/50 backdrop-blur-lg px-6 py-3 rounded-lg border border-purple-500/20"
            >
              {feature.icon}
              <span>{feature.title}</span>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-purple-200 mb-4">{testimonial.text}</p>
                <div className="font-medium">{testimonial.name}</div>
                <div className="text-sm text-purple-400">{testimonial.role}</div>
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
                  ? 'bg-gradient-to-b from-purple-500/20 to-pink-500/20 border-purple-500/30' 
                  : 'bg-zinc-900/50 border-purple-500/20'
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">${plan.price}<span className="text-sm">/month</span></div>
              <ul className="space-y-3">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-200">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/sign-up">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className={`w-full mt-8 py-3 rounded-lg font-medium ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-zinc-800 text-purple-200'
                  }`}
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoicePrinterLanding;