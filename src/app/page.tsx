"use client";
import React, { useEffect, useState } from 'react';
import { Mic, Wand2, Settings2, Users, Repeat, Music, DollarSign} from 'lucide-react';
import Link from 'next/link';

interface Star {
  id: number;
  left: string;
  top: string;
  animationDuration: string;
  size: number;
}

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  highlighted: boolean;
}

interface StarBackgroundProps {
  starCount?: number;
}

const StarBackground: React.FC<StarBackgroundProps> = ({ starCount = 100 }) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = (): Star[] => {
      return Array.from({ length: starCount }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        size: Math.random() * 2 + 1
      }));
    };
    setStars(generateStars());
  }, [starCount]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: star.animationDuration
          }}
        />
      ))}
    </div>
  );
};

const VoiceAILanding: React.FC = () => {
  const pricingPlans: PricingPlan[] = [
    {
      name: 'Basic',
      price: '$9',
      features: ['5 AI voices', '100 generations/month', 'Standard quality', 'Email support'],
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$29',
      features: ['20 AI voices', 'Unlimited generations', 'HD quality', 'Priority support', 'Custom voice training'],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Unlimited voices', 'API access', 'Dedicated support', 'Custom integration', 'SLA guarantee'],
      highlighted: false
    }
  ];

  type FeatureCard = {
    icon: React.ReactNode;
    title: string;
    description: string;
  };

  const features: FeatureCard[] = [
    {
      icon: <Wand2 className="w-12 h-12 text-purple-400 mb-4" />,
      title: "1000+ Voice Variations",
      description: "Generate diverse voices across ages, accents, and emotions"
    },
    {
      icon: <Settings2 className="w-12 h-12 text-purple-400 mb-4" />,
      title: "Advanced Controls",
      description: "Fine-tune pitch, speed, emotion, and emphasis"
    },
    {
      icon: <Music className="w-12 h-12 text-purple-400 mb-4" />,
      title: "Real-Time Preview",
      description: "Instant voice generation with live adjustments"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <StarBackground />
      
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <Mic className="text-purple-400" />
          <span className="text-xl font-bold">VoiceAI</span>
        </div>
        <div className="flex space-x-4">
        <Link className="px-4 py-2 text-purple-400 hover:text-purple-300 transition" href="/sign-in"> 
          <button className="">Login</button>
          </Link>
          <Link className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-500 transition" href="/sign-up"> 
          <button className="">Sign Up</button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6">
          <span className="text-white">Transform Your Words with</span>
          <br />
          <span className="text-purple-400">AI-Powered Voices</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">Create natural, emotional, and diverse voices for any project</p>
        <button className="px-8 py-4 bg-purple-600 rounded-lg text-lg font-semibold hover:bg-purple-500 transition">
          Try Voice Generator
        </button>
      </div>

      {/* Features */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-900 p-8 rounded-xl border border-purple-500/20">
            {feature.icon}
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border ${
                plan.highlighted
                  ? 'bg-purple-900/30 border-purple-500'
                  : 'bg-gray-900 border-gray-800'
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">
                {plan.price}
                {plan.price !== 'Custom' && <span className="text-lg text-gray-400">/mo</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <DollarSign className="w-5 h-5 text-purple-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg transition ${
                  plan.highlighted
                    ? 'bg-purple-600 hover:bg-purple-500'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoiceAILanding;