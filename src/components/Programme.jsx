
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaClock,
} from "react-icons/fa";

function Location() {
  const locations = [
    {
      type: "Mariage religieux",
      title: "Église Nouvelle Cité de David",
      address: "Avenue Chef Katanga, C. Lubumbashi, Ville de Lubumbashi",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Eglise+Discipolat+Avenue+Tshimanga+Golf+Faustin+Lubumbashi",
    },
    {
      type: "Soirée",
      title: "Réception",
      address: "Av. Likasi, C. Lubumbashi, Ville de Lubumbashi",
      theme: "Emeraude terracota",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=2+croisement+avenues+Munua+Dikuku+Golf+Meteo+Faustin+Lubumbashi",
    },
  ];

  const program = [
    { time: "20H00", title: "Arrivée et installation des invités" },
    { time: "20H30", title: "Entrée des mariés" },
    { time: "21H00", title: "Coupure du gateau" },
    { time: "21H15", title: "Ouverture de bal" },
    { time: "22H00", title: "Remise des cadeaux (Cadeaux non emballés)" },
    { time: "22H30", title: "Buffet, Musique et danse" },
  ];

  return (
    <section className="bg-white text-[#0F4C3A]">

      {/* LIEUX DE CÉLÉBRATION */}
      <div id="lieux" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-[#C66B4E] uppercase tracking-[4px] text-xs sm:text-sm mb-4">
              Nos lieux de rencontre
            </p>

            <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl md:text-6xl font-semibold text-[#0F4C3A] mb-5">
              Les lieux de notre célébration
            </h2>

            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#C66B4E]" />
              <span className="text-[#C66B4E]">✦</span>
              <div className="w-12 h-px bg-[#C66B4E]" />
            </div>

            <p className="text-gray-500 max-w-2xl mx-auto leading-7">
              Retrouvez facilement les différents lieux où nous aurons
              la joie de partager ces moments avec vous.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {locations.map((location, index) => (
              <motion.div
                key={location.type}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-white border border-[#0F4C3A]/10 rounded-3xl p-8 sm:p-10 shadow-[0_8px_35px_rgba(15,76,58,0.06)] hover:shadow-[0_15px_40px_rgba(15,76,58,0.12)] transition-all duration-300"
              >
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-[#0F4C3A] via-[#C66B4E] to-[#0F4C3A] rounded-b-full" />

                <div className="w-16 h-16 mx-auto mb-7 rounded-full bg-[#0F4C3A]/5 flex items-center justify-center group-hover:bg-[#0F4C3A] transition-colors duration-300">
                  <FaMapMarkerAlt className="text-[#C66B4E] text-2xl group-hover:text-white transition-colors" />
                </div>

                <p className="text-[#C66B4E] uppercase tracking-[3px] text-xs text-center mb-3">
                  {location.type}
                </p>

                <h3 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-semibold text-[#0F4C3A] text-center mb-5">
                  {location.title}
                </h3>

                <div className="w-12 h-px bg-[#C66B4E] mx-auto mb-5" />

                <p className="text-gray-500 text-center leading-7 mb-6">
                  {location.address}
                </p>

                {location.theme && (
                  <div className="text-center mb-7 bg-[#FAF8F5] rounded-xl py-4">
                    <p className="text-xs uppercase tracking-[2px] text-gray-400 mb-2">
                      Thème de la soirée
                    </p>
                    <p className="font-['Cormorant_Garamond'] text-2xl italic font-semibold text-[#C66B4E]">
                      {location.theme}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}

          </div>
        </div>
      </div>

      
{/* LOCALISATION GPS */}
<section className="py-20 px-6 bg-white">
  <div id="localisation" className="max-w-5xl mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-10"
    >
      <p className="text-[#C66B4E] uppercase tracking-[4px] text-xs sm:text-sm mb-4">
        Retrouvez-nous
      </p>

      <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl md:text-6xl font-semibold text-[#0F4C3A] mb-5">
        Localisation de la soirée
      </h2>

      <div className="flex justify-center items-center gap-3 mb-6">
        <div className="w-12 h-px bg-[#C66B4E]" />
        <span className="text-[#C66B4E]">✦</span>
        <div className="w-12 h-px bg-[#C66B4E]" />
      </div>

      <p className="text-gray-500 max-w-2xl mx-auto leading-7">
        Voici la localisation GPS du lieu de la soirée.
      </p>
    </motion.div>

    {/* CARTE GPS */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="overflow-hidden rounded-3xl border border-[#0F4C3A]/10 shadow-[0_10px_40px_rgba(15,76,58,0.08)]"
    >
      <iframe
        src="https://www.google.com/maps?q=-11.640610964056501,27.422246124257697&output=embed"
        title="Lieu de la réception"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </motion.div>

    {/* BOUTON GOOGLE MAPS */}
    <div className="text-center mt-7">
      <a
        href="https://www.google.com/maps/search/?api=1&query=-11.640610964056501,27.422246124257697"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-[#0F4C3A] hover:bg-[#C66B4E] text-white px-8 py-4 rounded-full transition-all duration-300 text-sm"
      >
        Voir l'itinéraire sur Google Maps
        <span>↗</span>
      </a>
    </div>

  </div>
</section>


      {/* PROGRAMME */}
      <div id="programme" className="py-24 px-6 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-[#C66B4E] uppercase tracking-[4px] text-xs sm:text-sm mb-4">
              Programme de la soirée
            </p>

            <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl md:text-6xl font-semibold text-[#0F4C3A] mb-5">
              Déroulement de la soirée
            </h2>

            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#C66B4E]" />
              <span className="text-[#C66B4E]">✦</span>
              <div className="w-12 h-px bg-[#C66B4E]" />
            </div>

            <p className="text-gray-500 max-w-2xl mx-auto leading-7">
              Nous avons préparé plusieurs moments
              pour rendre cette soirée inoubliable.
            </p>
          </motion.div>

          {/* CHRONOLOGIE */}
          <div className="relative">

            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#C66B4E]/50 md:-translate-x-1/2" />

            <div className="space-y-10">
              {program.map((event, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={`${event.time}-${event.title}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="relative grid md:grid-cols-2 gap-8"
                  >

                    {/* POINT CENTRAL */}
                    <div className="absolute left-4 md:left-1/2 top-8 w-4 h-4 bg-[#0F4C3A] border-[3px] border-[#C66B4E] rounded-full -translate-x-1/2 z-10" />

                    {/* CONTENU */}
                    <div
                      className={`
                        ${
                          isLeft
                            ? "md:text-right md:pr-12"
                            : "md:col-start-2 md:pl-12"
                        }
                        pl-12
                      `}
                    >
                      <div className="bg-white border border-[#0F4C3A]/5 rounded-2xl p-6 shadow-[0_5px_25px_rgba(15,76,58,0.05)] hover:shadow-lg transition-all">

                        <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                          <FaClock className="text-[#C66B4E]" />

                          <span className="text-[#0F4C3A] font-semibold tracking-[2px] text-sm">
                            {event.time}
                          </span>
                        </div>

                        <h3 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl font-semibold text-[#0F4C3A]">
                          {event.title}
                        </h3>

                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* THÈME */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 rounded-3xl bg-white border border-[#0F4C3A]/10 p-10 sm:p-14 text-center shadow-[0_8px_35px_rgba(15,76,58,0.05)]"
          >
            <div id="dress-code" className="w-14 h-14 rounded-full bg-[#0F4C3A]/5 flex items-center justify-center mx-auto mb-5">
              <span className="text-[#C66B4E] text-2xl">✦</span>
            </div>

            <p className="text-[#C66B4E] uppercase tracking-[4px] text-xs sm:text-sm mb-4">
              Dress code
            </p>

            <h3 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl md:text-6xl italic font-semibold text-[#0F4C3A]">
              Emeraude & Terracotta
            </h3>

            <div className="flex justify-center gap-3 mt-7">
              <div className="w-8 h-8 rounded-full bg-[#0F4C3A]" />
              <div className="w-8 h-8 rounded-full bg-[#C66B4E]" />
              <div className="w-8 h-8 rounded-full bg-[#C39F61]" />
              <div className="w-8 h-8 rounded-full bg-[#E2682C]" />
              <div className="w-8 h-8 rounded-full bg-[#F6884E]" />
              <div className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-gray-200" />
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}

export default Location;