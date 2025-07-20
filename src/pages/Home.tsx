import React from 'react';
import TerminalWindow from '../components/TerminalWindow';
import TypingAnimation from '../components/TypingAnimation';
import { motion } from 'framer-motion';

const heroLines = [
  'Hello World! I\'m Walid Ezzat',
  'Junior Frontend Developer',
  'Where Engineering Meets Creativity',
  'Building beautiful, accessible web experiences',
];

const Home: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0a0e0a] via-[#101c10] to-[#1a1d1a] overflow-hidden">
      {/* Animated background shimmer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'repeating-linear-gradient(120deg, #00ff41 0 2px, transparent 2px 40px)' }}
      />
      <TerminalWindow>
        <div className="flex flex-col items-center gap-6">
          <TypingAnimation
            lines={heroLines}
            typingSpeed={40}
            className="text-lg md:text-xl text-terminal-green text-center"
          />
          <motion.button
            whileHover={{ scale: 1.07, boxShadow: '0 0 16px #00ff41' }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 px-8 py-3 rounded-lg bg-terminal-green text-black font-bold text-lg shadow-lg hover:bg-accent-green transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-terminal-green"
          >
            Ready to build something amazing?
          </motion.button>
        </div>
      </TerminalWindow>
    </div>
  );
};

export default Home;
