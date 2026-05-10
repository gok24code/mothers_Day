'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

const BackgroundShapes = () => {
  const [shapes, setShapes] = useState<{ id: number; x: number; size: number; duration: number; delay: number; type: 'heart' | 'petal' }[]>([]);

  useEffect(() => {
    const newShapes = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * (30 - 15) + 15,
      duration: Math.random() * (15 - 8) + 8,
      delay: Math.random() * 10,
      type: (Math.random() > 0.5 ? 'heart' : 'petal') as 'heart' | 'petal',
    }));
    setShapes(newShapes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute bottom-[-50px] text-soft-pink opacity-40"
          initial={{ x: `${shape.x}vw`, y: 0, rotate: 0 }}
          animate={{
            y: '-120vh',
            rotate: 360,
            x: `${shape.x + (Math.random() * 10 - 5)}vw`,
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "linear"
          }}
        >
          {shape.type === 'heart' ? (
            <Heart size={shape.size} fill="currentColor" />
          ) : (
            <div 
              style={{ 
                width: shape.size, 
                height: shape.size * 1.5, 
                borderRadius: '50% 50% 50% 50% / 80% 80% 20% 20%',
                backgroundColor: 'currentColor'
              }} 
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default BackgroundShapes;
