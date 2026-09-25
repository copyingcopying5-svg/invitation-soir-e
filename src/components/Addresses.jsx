import { motion } from "framer-motion";
import { FaChurch, FaMapMarkerAlt } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";

function Addresses() {
  return (
    <section
      id="adresses"
      className="
        relative
        overflow-hidden
        bg-[#F8EDEF]
        px-6
        py-20
        md:py-28
      "
    >
      {/* Décor léger à gauche */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          w-32
          h-64
          opacity-20
          bg-gradient-to-br
          from-[#D8D2C7]
          via-transparent
          to-transparent
          rounded-br-full
        "
      />

      {/* Décor léger à droite */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          bottom-0
          w-40
          h-72
          opacity-20
          bg-gradient-to-tl
          from-[#D8D2C7]
          via-transparent
          to-transparent
          rounded-tl-full
        "
      />

      <div className="relative z-10 max-w-xl mx-auto text-center">

        {/* ========================= */}
        {/* BÉNÉDICTION NUPTIALE */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Église */}
          <div className="flex justify-center mb-2">
            <FaChurch
              className="
                text-[#222222]
                text-6xl
                md:text-7xl
              "
            />
          </div>

          {/* Titre */}
          <div className="leading-none">
            <h2
              className="
                font-['Cormorant_Garamond']
                text-4xl
                md:text-5xl
                font-semibold
                uppercase
                tracking-wide
                text-[#111111]
              "
            >
              BÉNÉDICTION
            </h2>

            <p
              className="
                font-['Allura']
                text-4xl
                md:text-5xl
                text-[#111111]
                -mt-1
              "
            >
              Nuptiale
            </p>
          </div>

          {/* Localisation */}
          <div className="mt-7">
            <FaMapMarkerAlt
              className="
                mx-auto
                text-red-600
                text-4xl
              "
            />

            <p
              className="
                mt-2
                font-['Poppins']
                text-xs
                md:text-sm
                uppercase
                tracking-[2px]
                text-[#222]
              "
            >
              ÉGLISE
            </p>

            <h3
              className="
                font-['Cormorant_Garamond']
                text-3xl
                md:text-4xl
                font-semibold
                uppercase
                text-[#111111]
                mt-1
              "
            >
              DISCIPOLAT
            </h3>

            <p
              className="
                font-['Poppins']
                text-sm
                md:text-base
                uppercase
                leading-7
                text-[#333333]
                mt-1
              "
            >
              Avenue Tshimanga
              <br />
              Golf Météo Faustin
            </p>

            <p
              className="
                font-['Poppins']
                text-2xl
                md:text-3xl
                font-bold
                text-[#111111]
                mt-4
              "
            >
              13H30
            </p>
          </div>
        </motion.div>

        {/* ========================= */}
        {/* ESPACE ENTRE LES BLOCS */}
        {/* ========================= */}

        <div className="h-20 md:h-24" />

        {/* ========================= */}
        {/* SOIRÉE DANSANTE */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Couple qui danse */}
          <div className="flex justify-center mb-2">
            <GiLovers
              className="
                text-[#222222]
                text-7xl
                md:text-8xl
              "
            />
          </div>

          {/* Titre */}
          <div className="leading-none">
            <h2
              className="
                font-['Cormorant_Garamond']
                text-4xl
                md:text-5xl
                font-semibold
                uppercase
                tracking-wide
                text-[#111111]
              "
            >
              SOIRÉE
            </h2>

            <p
              className="
                font-['Allura']
                text-4xl
                md:text-5xl
                text-[#111111]
                -mt-1
              "
            >
              Dansante
            </p>
          </div>

          {/* Localisation */}
          <div className="mt-7">
            <FaMapMarkerAlt
              className="
                mx-auto
                text-red-600
                text-4xl
              "
            />

            <p
              className="
                mt-2
                font-['Poppins']
                text-xs
                md:text-sm
                uppercase
                tracking-[2px]
                text-[#222]
              "
            >
              SALLE DE FÊTE
            </p>

            <h3
              className="
                font-['Cormorant_Garamond']
                text-3xl
                md:text-4xl
                font-semibold
                uppercase
                text-[#111111]
                mt-1
              "
            >
              LA SHEKINAH EVENT
            </h3>

            <p
              className="
                font-['Poppins']
                text-sm
                md:text-base
                uppercase
                leading-7
                text-[#333333]
                mt-3
              "
            >
              N°2, CROISEMENT DES AVENUES MUNUA ET DIKUKU
              <br />
              Q. GOLF MÉTÉO FAUSTIN
            </p>

            <p
              className="
                font-['Poppins']
                text-sm
                md:text-base
                uppercase
                text-[#333333]
                mt-2
              "
            >
              RÉF : ARRÊT LA KATANGAISE
            </p>

            <p
              className="
                font-['Poppins']
                text-2xl
                md:text-3xl
                font-bold
                text-[#111111]
                mt-4
              "
            >
              18H00
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Addresses;