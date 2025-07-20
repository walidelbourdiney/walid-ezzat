import React from 'react';
import { motion } from 'framer-motion';
import TypingAnimation from './TypingAnimation';

const bioLines = [
  'From mechanical engineering blueprints to React components -',
  'I bring systematic thinking and creative problem-solving to frontend development.',
  '',
  'I build with users in mind, code with intention, and collaborate with heart.',
  '',
  'Skills: React • TypeScript • Tailwind CSS • UI/UX • Performance Optimization',
];

const AboutBio: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="flex flex-col items-center gap-8"
    >
      {/* Avatar placeholder */}
      <div className="w-32 h-32 rounded-full bg-terminal-green/10 border-4 border-terminal-green shadow-lg flex items-center justify-center text-6xl text-terminal-green mb-2 animate-pulse-glow">
        <span role="img" aria-label="avatar">👤</span>
      </div>
      <div className="w-full max-w-xl">
        <TypingAnimation lines={bioLines} typingSpeed={30} />
      </div>
      <a
        href="/resume.pdf"
        download
        className="mt-4 px-6 py-3 rounded-lg bg-terminal-green text-black font-mono font-bold shadow-lg hover:bg-accent-green transition-colors duration-200 border-2 border-terminal-green ring-2 ring-terminal-green/40 animate-pulse-glow"
      >
        $ curl -O resume.pdf
      </a>
    </motion.div>
  );
};

export default AboutBio; 