import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaBolt, FaCheckCircle } from 'react-icons/fa'

const WHATSAPP_LINK = "https://wa.me/5527999410684?text=Olá! Preciso de um eletricista urgente!"

const benefits = [
  'Atendimento 24 horas',
  'Orçamento sem compromisso',
  'Profissional qualificado',
  'Garantia no serviço',
]

export default function CTA() {
  return (
    <section style={{
      padding: '6rem 1rem',
      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.5,
        pointerEvents: 'none',
      }} />

      {/* Decorative Bolts */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          opacity: 0.2,
        }}
      >
        <FaBolt size={80} color="#000" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          opacity: 0.2,
        }}
      >
        <FaBolt size={100} color="#000" />
      </motion.div>

      <div className="container" style={{
        maxWidth: '900px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            style={{
              width: '80px',
              height: '80px',
              background: 'rgba(0, 0, 0, 0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
            }}
          >
            <FaBolt size={40} color="#0f0f0f" />
          </motion.div>

          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900,
            color: '#0f0f0f',
            marginBottom: '1rem',
          }}>
            Precisa de um Eletricista AGORA?
          </h2>

          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(0, 0, 0, 0.7)',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem',
          }}>
            Atendimento de emergência 24 horas. Diagnóstico gratuito e resposta em até 30 minutos!
          </p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="cta-benefits"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="cta-benefit-item"
              >
                <FaCheckCircle size={16} />
                {benefit}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
          }} className="cta-buttons">
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: '#0f0f0f',
                color: '#fff',
                padding: '1.25rem 2.5rem',
                borderRadius: '50px',
                fontSize: '1.125rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              }}
            >
              <FaWhatsapp size={24} />
              CHAMAR NO WHATSAPP
            </motion.a>

            <motion.a
              href="tel:+5527999410684"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'transparent',
                color: '#0f0f0f',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: 600,
                textDecoration: 'none',
                border: '2px solid rgba(0, 0, 0, 0.3)',
              }}
            >
              <FaPhone size={18} />
              (27) 99941-0684
            </motion.a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .cta-benefits {
          display: grid;
          grid-template-columns: repeat(2, auto);
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
        }
        .cta-benefit-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 0, 0, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #0f0f0f;
          white-space: nowrap;
        }
        @media (min-width: 480px) {
          .cta-buttons {
            flex-direction: row !important;
            justify-content: center;
          }
        }
        @media (min-width: 900px) {
          .cta-benefits {
            grid-template-columns: repeat(4, auto);
          }
        }
      `}</style>
    </section>
  )
}
