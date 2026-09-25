import { motion } from "framer-motion";
import {
  FaGlassCheers,
  FaHeart,
  FaGift,
  FaUtensils,
  FaMusic,
  FaBirthdayCake,
  FaUsers,
  FaPlay,
} from "react-icons/fa";

function Programme() {
  const events = [
    {
      time: "18H00",
      title: "Arrivée et installation",
      description: "des invités",
      icon: <FaUsers />,
      side: "right",
    },
    {
      time: "20H00",
      title: "Entrée des mariés",
      description: "",
      icon: <FaHeart />,
      side: "left",
    },
    {
      time: "20H15",
      title: "Présentation des mariés",
      description: "",
      icon: <FaUsers />,
      side: "right",
    },
    {
      time: "20H30",
      title: "Coupure du gâteau",
      description: "",
      icon: <FaBirthdayCake />,
      side: "left",
    },
    {
      time: "20H45",
      title: "Ouverture de bal",
      description: "",
      icon: <FaHeart />,
      side: "right",
    },
    {
      time: "21H20",
      title: "Remise des cadeaux",
      description: "",
      icon: <FaGift />,
      side: "left",
    },
    {
      time: "22H00",
      title: "Buffet",
      description: "",
      icon: <FaUtensils />,
      side: "right",
    },
    {
      time: "22H45",
      title: "Musique et danse",
      description: "",
      icon: <FaMusic />,
      side: "left",
    },
  ];

  return (
    <section
      id="programme"
      className="
        relative
        overflow-hidden
        bg-[#FAF9F6]
        px-5
        py-20
        md:py-28
      "
    >
      <div className="max-w-4xl mx-auto">

        {/* ========================= */}
        {/* TITRE */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2
            className="
              font-['Cormorant_Garamond']
              text-5xl
              md:text-6xl
              font-semibold
              uppercase
              text-[#111111]
              leading-none
            "
          >
            Programme
          </h2>

          <p
            className="
              font-['Allura']
              text-5xl
              md:text-6xl
              text-[#222]
              -mt-1
            "
          >
            de la soirée
          </p>
        </motion.div>

        {/* ========================= */}
        {/* PROGRAMME */}
        {/* ========================= */}

        <div className="relative">

          {/* Ligne centrale */}
          <div
            className="
              absolute
              left-1/2
              top-0
              bottom-0
              w-[1px]
              bg-[#222]/30
              -translate-x-1/2
            "
          />

          <div className="space-y-10 md:space-y-12">

            {events.map((event, index) => (
              <motion.div
                key={`${event.time}-${event.title}`}
                initial={{
                  opacity: 0,
                  x: event.side === "left" ? -30 : 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.05,
                }}
                className="
                  relative
                  grid
                  grid-cols-2
                  min-h-[90px]
                  md:min-h-[105px]
                "
              >

                {/* ========================= */}
                {/* CÔTÉ GAUCHE */}
                {/* ========================= */}

                <div className="pr-8 md:pr-14 flex items-center justify-end">

                  {event.side === "left" && (
                    <div className="text-right">

                      <p
                        className="
                          font-['Poppins']
                          text-xl
                          md:text-2xl
                          font-bold
                          tracking-[2px]
                          text-[#111]
                        "
                      >
                        {event.time}
                      </p>

                      <p
                        className="
                          font-['Cormorant_Garamond']
                          text-xl
                          md:text-2xl
                          font-semibold
                          uppercase
                          text-[#222]
                          leading-tight
                          mt-1
                        "
                      >
                        {event.title}
                      </p>

                      {event.description && (
                        <p
                          className="
                            font-['Poppins']
                            text-xs
                            md:text-sm
                            uppercase
                            text-[#666]
                            mt-1
                          "
                        >
                          {event.description}
                        </p>
                      )}

                    </div>
                  )}

                </div>

                {/* ========================= */}
                {/* ICÔNE CENTRALE */}
                {/* ========================= */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    z-10
                    w-14
                    h-14
                    md:w-16
                    md:h-16
                    rounded-full
                    bg-[#FAF9F6]
                    border
                    border-[#C8A54D]/50
                    flex
                    items-center
                    justify-center
                  "
                >
                  <span
                    className="
                      text-[#222]
                      text-xl
                      md:text-2xl
                    "
                  >
                    {event.icon}
                  </span>
                </div>

                {/* ========================= */}
                {/* CÔTÉ DROIT */}
                {/* ========================= */}

                <div className="pl-8 md:pl-14 flex items-center justify-start">

                  {event.side === "right" && (
                    <div className="text-left">

                      <p
                        className="
                          font-['Poppins']
                          text-xl
                          md:text-2xl
                          font-bold
                          tracking-[2px]
                          text-[#111]
                        "
                      >
                        {event.time}
                      </p>

                      <p
                        className="
                          font-['Cormorant_Garamond']
                          text-xl
                          md:text-2xl
                          font-semibold
                          uppercase
                          text-[#222]
                          leading-tight
                          mt-1
                        "
                      >
                        {event.title}
                      </p>

                      {event.description && (
                        <p
                          className="
                            font-['Poppins']
                            text-xs
                            md:text-sm
                            uppercase
                            text-[#666]
                            mt-1
                          "
                        >
                          {event.description}
                        </p>
                      )}

                    </div>
                  )}

                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Programme;