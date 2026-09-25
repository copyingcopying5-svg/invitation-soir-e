import { motion } from "framer-motion";
import invitationImage from "../assets/img_3.jpg";

function InvitationMessage() {
  return (
    <section
      id="invitation"
      className="bg-[#FAF8F5] px-6 py-20 md:py-28"
    >
      <div className="max-w-5xl mx-auto">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <img
            src={invitationImage}
            alt="Vous êtes invité(e)"
            className="
              w-full
              h-auto
              rounded-[24px]
              object-cover
              shadow-[0_15px_50px_rgba(0,0,0,0.08)]
            "
          />
        </motion.div>

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mt-14 md:mt-20"
        >
          <p
            className="
              font-['Poppins']
              text-[16px]
              md:text-[18px]
              leading-[2]
              text-[#777]
              font-light
            "
          >
            C'est avec une immense joie que nous vous invitons à
            partager avec nous le bonheur de notre union.
          </p>

          <p
            className="
              font-['Poppins']
              text-[16px]
              md:text-[18px]
              leading-[2]
              text-[#777]
              font-light
              mt-6
            "
          >
            Venez vivre à nos côtés ces précieux instants de joie,
            d'amour et de célébration.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default InvitationMessage;