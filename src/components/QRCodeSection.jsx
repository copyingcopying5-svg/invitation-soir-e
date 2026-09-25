import { motion } from "framer-motion";
import { QRCodeCanvas } from "qrcode.react";

function QRCodeSection({
  guestName = "Jean-Pierre",
  tableNumber = "12",
}) {
  // Informations qui seront réellement encodées dans le QR Code
  const qrData = JSON.stringify({
    nom: guestName,
    table: tableNumber,
  });

  return (
    <section
      id="qr-code"
      className="
        bg-[#FAF9F6]
        px-6
        py-24
        md:py-32
      "
    >
      <div className="max-w-4xl mx-auto">

        {/* =========================
            TITRE
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2
            className="
              font-['Cormorant_Garamond']
              text-5xl
              md:text-6xl
              font-semibold
              uppercase
              tracking-wide
              text-[#151515]
            "
          >
            Votre invitation
          </h2>

          <p
            className="
              font-['Allura']
              text-4xl
              md:text-5xl
              text-[#555]
              mt-1
            "
          >
            personnelle
          </p>

          <div className="w-20 h-[1px] bg-[#222] mx-auto mt-6 opacity-30" />
        </motion.div>


        {/* =========================
            QR CODE
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="
            mt-14
            flex
            flex-col
            items-center
          "
        >

          {/* Carte QR */}
          <div
            className="
              bg-white
              p-6
              md:p-8
              shadow-[0_15px_50px_rgba(0,0,0,0.08)]
              border
              border-[#E7E0D8]
            "
          >
            <QRCodeCanvas
              value={qrData}
              size={220}
              bgColor="#FFFFFF"
              fgColor="#111111"
              level="H"
              includeMargin={true}
            />
          </div>

          {/* Instructions */}
          <p
            className="
              max-w-md
              text-center
              font-['Poppins']
              text-sm
              md:text-base
              leading-7
              text-[#777]
              mt-10
            "
          >
            Présentez ce QR Code à votre arrivée afin de faciliter
            votre accueil et de vous orienter vers votre table.
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default QRCodeSection;