
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function InvitationIntro({ guestName = "Cher invité", onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    onOpen?.();
  };

  return (
    <AnimatePresence>
      {!opened && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] overflow-hidden flex items-center justify-center bg-[#0F4C3A]"
        >
          {/* FOND */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B382D] via-[#155744] to-[#092E25]" />

          {/* HALOS DÉCORATIFS */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#C66B4E]/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#C66B4E]/20 blur-3xl" />

          {/* FORMES BOTANIQUES */}
          <div className="absolute top-0 left-0 text-[#C66B4E]/30 text-[150px] sm:text-[220px] leading-none rotate-45 pointer-events-none">
            ❧
          </div>

          <div className="absolute bottom-0 right-0 text-[#C66B4E]/30 text-[150px] sm:text-[220px] leading-none -rotate-45 pointer-events-none">
            ❧
          </div>

          {/* PETITS DÉTAILS */}
          <div className="absolute top-[15%] right-[12%] w-3 h-3 rounded-full bg-[#D99A7D]" />
          <div className="absolute bottom-[18%] left-[12%] w-2 h-2 rounded-full bg-[#D99A7D]" />

          {/* CARTE PRINCIPALE */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 w-[90%] max-w-xl"
          >
            <div className="relative bg-[#F5EFE5] rounded-t-[180px] rounded-b-2xl px-6 sm:px-12 pt-16 pb-12 text-center shadow-2xl overflow-hidden">

              {/* CADRE INTÉRIEUR */}
              <div className="absolute inset-3 border border-[#C66B4E]/50 rounded-t-[170px] rounded-b-xl pointer-events-none" />

              {/* MOTIF SUPÉRIEUR */}
              <div className="relative text-[#C66B4E] text-4xl mb-5">
                ❧
              </div>

              {/* INTRODUCTION */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative font-['Poppins'] text-[#0F4C3A] uppercase tracking-[4px] text-[10px] sm:text-xs mb-5"
              >
                Une invitation particulière
              </motion.p>

              {/* NOM DES MARIÉS */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative font-['Cormorant_Garamond'] text-5xl sm:text-7xl font-semibold text-[#0F4C3A] leading-none"
              >
                GAEL
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="font-serif italic text-[#C66B4E] text-4xl sm:text-5xl my-2"
              >
                &
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="relative font-['Cormorant_Garamond'] text-5xl sm:text-7xl font-semibold text-[#0F4C3A] leading-none"
              >
                DORCAS
              </motion.h1>

              {/* DATE */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-7"
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-10 h-px bg-[#C66B4E]" />
                  <span className="text-[#C66B4E]">✦</span>
                  <div className="w-10 h-px bg-[#C66B4E]" />
                </div>

                <p className="font-['Poppins'] text-[#0F4C3A] uppercase tracking-[3px] text-[10px] sm:text-xs">
                  S'unissent ce samedi
                </p>

                <p className="font-['Cormorant_Garamond'] italic text-[#C66B4E] text-3xl sm:text-4xl mt-2">
                  14 Novembre 2026
                </p>

                <p className="font-['Poppins'] text-[#0F4C3A] uppercase tracking-[3px] text-[10px] sm:text-xs">
                  <br />A la salle Emmanuel
                </p>
              </motion.div>

              {/* BOUTON */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                onClick={handleOpen}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="relative mt-8 inline-flex items-center justify-center gap-3 bg-[#0F4C3A] hover:bg-[#C66B4E] text-[#F5EFE5] px-8 sm:px-10 py-4 rounded-full shadow-lg transition-all duration-300 font-['Poppins'] text-xs sm:text-sm tracking-wider"
              >
                <span>Ouvrir mon invitation</span>
                <span className="text-lg">→</span>
              </motion.button>

              {/* ORNEMENT INFÉRIEUR */}
              <div className="text-[#C66B4E] text-3xl mt-4">
                ❧
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default InvitationIntro;
