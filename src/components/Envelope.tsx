"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);

  const message = `Canım Annem,

Dünyadaki en güvenli limanım, ilk öğretmenim ve en yakın dostum... Hayat yolculuğumda bana her zaman sevginle ışık oldun. Varlığın, aldığım her nefeste bana güç veriyor. 

Ellerinden öper, kalbindeki o sonsuz şefkatin hiç eksilmemesini dilerim. 

Anneler Günün Kutlu Olsun. Seni Çok Seviyorum.`;

  return (
    <div className="relative flex items-center justify-center p-4 perspective-1000">
      <div
        className="relative cursor-pointer w-[300px] h-[200px] sm:w-[450px] sm:h-[300px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Shadow */}
        <div className="absolute inset-0 bg-black/5 blur-xl transform translate-y-8 scale-95 rounded-lg" />

        {/* Envelope Body */}
        <div className="absolute inset-0 bg-soft-pink rounded-lg shadow-md z-10 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#D4A5A5_1px,transparent_1px)] bg-[length:20px_20px]" />
        </div>

        {/* Envelope Flap */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1/2 bg-soft-pink rounded-t-lg origin-top z-30 shadow-sm border-b border-white/20"
          initial={false}
          animate={{ rotateX: isOpen ? 180 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="absolute inset-0 bg-soft-pink flex items-center justify-center rounded-t-lg">
            <div className="w-12 h-12 rounded-full bg-white/50 border-2 border-rose-dust flex items-center justify-center text-rose-dust">
              ❤️
            </div>
          </div>
        </motion.div>

        {/* Letter */}
        <motion.div
          className="absolute left-4 right-4 bg-white p-6 sm:p-10 rounded shadow-lg z-20"
          initial={{ bottom: "0%", scale: 0.95 }}
          animate={{
            bottom: isOpen ? "10%" : "-10%",
            y: isOpen ? 40 : 0,
            scale: isOpen ? 1.1 : 0.95,
            zIndex: isOpen ? 40 : 20 /*commit id*/,
          }}
          transition={{ duration: 0.8, delay: isOpen ? 0.3 : 0 }}
        >
          <div className="font-cursive text-rose-dust text-lg sm:text-2xl leading-relaxed whitespace-pre-line">
            {isOpen ? (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.03,
                      delayChildren: 0.8,
                    },
                  },
                }}
              >
                {message.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            ) : (
              <div className="text-center opacity-40">Dokun ve Aç...</div>
            )}
          </div>
        </motion.div>

        {/* Envelope Front (V-Shape) */}
        <div className="absolute inset-0 z-[25] pointer-events-none">
          <div
            className="absolute bottom-0 left-0 w-full h-full bg-soft-pink/50 shadow-inner rounded-lg"
            style={{
              clipPath: "polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)",
            }}
          />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-10 text-rose-dust font-serif italic text-lg"
          >
            Kapatmak için tekrar tıkla ✨
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Envelope;
