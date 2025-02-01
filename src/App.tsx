import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Palmtree as Palm, Waves } from 'lucide-react';
import ThreeScene from './components/ThreeScene';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const headerRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power4.out"
      });

      // Features animation
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top center",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      <ThreeScene />
      
      {/* Hero Section */}
      <div ref={headerRef} className="relative pt-32 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Discover Sri Lanka
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Experience the wonder of ancient temples, pristine beaches, and lush rainforests
            in the pearl of the Indian Ocean.
          </p>
          <button className="mt-8 px-8 py-3 bg-yellow-500 text-blue-900 rounded-full font-semibold 
            hover:bg-yellow-400 transition-colors duration-300">
            Start Your Journey
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div ref={featuresRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white">
            <Palm className="w-12 h-12 mb-4 text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Natural Wonders</h3>
            <p className="text-blue-100">
              From misty mountains to tropical beaches, experience diverse landscapes.
            </p>
          </div>
          <div className="feature-card bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white">
            <Compass className="w-12 h-12 mb-4 text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Cultural Heritage</h3>
            <p className="text-blue-100">
              Explore ancient temples and experience rich cultural traditions.
            </p>
          </div>
          <div className="feature-card bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white">
            <Waves className="w-12 h-12 mb-4 text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Coastal Paradise</h3>
            <p className="text-blue-100">
              Relax on pristine beaches and enjoy water sports adventures.
            </p>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img 
            src="https://images.unsplash.com/photo-1588258524675-c61945a244d8?auto=format&fit=crop&w=800&q=80" 
            alt="Sigiriya Rock Fortress"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img 
            src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80" 
            alt="Sri Lankan Beach"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img 
            src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80" 
            alt="Tea Plantations"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default App;