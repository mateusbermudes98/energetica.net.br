import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBolt, FaFire, FaHome, FaTh, FaLightbulb, FaSearch, FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_LINK = "https://wa.me/5527999410684?text=Olá! Preciso de um eletricista urgente!"

const services = [
  {
    icon: FaBolt,
    title: 'Falta de Energia',
    description: 'Ficou sem luz em casa ou no comércio? Identificamos e resolvemos o problema rapidamente.',
    urgent: true,
  },
  {
    icon: FaFire,
    title: 'Curto-Circuito',
    description: 'Cheiro de queimado? Disjuntor desarmando? Atendimento imediato para sua segurança.',
    urgent: true,
  },
  {
    icon: FaHome,
    title: 'Instalação Residencial',
    description: 'Instalação de tomadas, interruptores, chuveiros, ar-condicionado e muito mais.',
  },
  {
    icon: FaTh,
    title: 'Quadro de Disjuntores',
    description: 'Organização, troca e manutenção de quadros elétricos com segurança e qualidade.',
  },
  {
    icon: FaLightbulb,
    title: 'Iluminação',
    description: 'Instalação de lustres, luminárias, spots e toda iluminação residencial e comercial.',
  },
  {
    icon: FaSearch,
    title: 'Diagnóstico Elétrico',
    description: 'Identificamos problemas ocultos na sua instalação antes que causem danos maiores.',
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
        border: service.urgent ? '1px solid rgba(239, 68, 68, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        padding: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      {/* Glow Effect on Hover */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: service.urgent
          ? 'radial-gradient(circle at top right, rgba(239, 68, 68, 0.1) 0%, transparent 50%)'
          : 'radial-gradient(circle at top right, rgba(255, 215, 0, 0.05) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      {service.urgent && (
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'rgba(239, 68, 68, 0.2)',
          color: '#fca5a5',
          padding: '0.25rem 0.75rem',
          borderRadius: '20px',
          fontSize: '0.75rem',
          fontWeight: 600,
        }}>
          URGENTE
        </div>
      )}

      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.5 }}
        style={{
          width: '64px',
          height: '64px',
          background: service.urgent
            ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(239, 68, 68, 0.1) 100%)'
            : 'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 165, 0, 0.1) 100%)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
        }}
      >
        <service.icon size={28} color={service.urgent ? '#fca5a5' : '#FFD700'} />
      </motion.div>

      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 700,
        marginBottom: '0.75rem',
      }}>
        {service.title}
      </h3>

      <p style={{
        color: '#9ca3af',
        fontSize: '0.95rem',
        lineHeight: 1.7,
        marginBottom: '1.5rem',
      }}>
        {service.description}
      </p>

      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 5 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#FFD700',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '0.9rem',
        }}
      >
        Solicitar agora
        <span style={{ fontSize: '1.2rem' }}>→</span>
      </motion.a>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="servicos" style={{
      padding: '6rem 1rem',
      background: '#0f0f0f',
      position: 'relative',
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(255, 215, 0, 0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>
            Serviços de <span>Emergência Elétrica</span>
          </h2>
          <p>Resolvemos seu problema elétrico hoje mesmo com qualidade e segurança</p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            textAlign: 'center',
            marginTop: '3rem',
          }}
        >
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-large"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp size={22} />
            SOLICITAR ORÇAMENTO GRÁTIS
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
