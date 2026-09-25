import { motion } from "framer-motion";
import img1 from "../assets/img2.jpg";

function Story() {
  return (
    <section
      id="histoire"
      className="bg-[#FAF8F5] px-6 py-20 md:py-28"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <img
            src={img1}
            alt="Les mariés"
            className="
              w-full
              h-auto
              rounded-[24px]
              object-cover
              shadow-[0_15px_50px_rgba(0,0,0,0.08)]
            "
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Story;