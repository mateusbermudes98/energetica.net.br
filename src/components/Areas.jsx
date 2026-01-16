import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_LINK = "https://wa.me/5527999410684?text=Olá! Preciso de um eletricista urgente!"

const areas = [
  { name: 'Praia Grande', city: 'Serra' },
  { name: 'Jacaraípe', city: 'Serra' },
  { name: 'Nova Almeida', city: 'Serra' },
  { name: 'Manguinhos', city: 'Serra' },
  { name: 'Fundão', city: 'Fundão' },
  { name: 'Aracruz', city: 'Aracruz' },
  { name: 'Praia Formosa', city: 'Aracruz' },
  { name: 'Santa Cruz', city: 'Aracruz' },
  { name: 'Barra do Saí', city: 'Aracruz' },
  { name: 'Colina de Laranjeiras', city: 'Serra' },
  { name: 'Serra Litoral', city: 'Serra' },
  { name: 'E toda região!', city: '' },
]

function AreaCard({ area, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-30px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{
        scale: 1.05,
        background: 'rgba(255, 215, 0, 0.1)',
        borderColor: 'rgba(255, 215, 0, 0.5)',
      }}
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        padding: '1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        style={{
          width: '36px',
          height: '36px',
          background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 165, 0, 0.1) 100%)',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <FaMapMarkerAlt size={16} color="#FFD700" />
      </motion.div>
      <div>
        <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>
          {area.name}
        </div>
        {area.city && (
          <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>
            {area.city}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Areas() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="areas" style={{
      padding: '6rem 1rem',
      background: 'linear-gradient(180deg, #050505 0%, #0f0f0f 100%)',
      position: 'relative',
    }}>
      {/* Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(255, 215, 0, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        transform: 'translateY(-50%)',
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
            Áreas de <span>Atendimento</span>
          </h2>
          <p>Eletricista em toda região do litoral do Espírito Santo</p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
        }}>
          {areas.map((area, index) => (
            <AreaCard key={area.name} area={area} index={index} />
          ))}
        </div>

        {/* Map Placeholder / Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 165, 0, 0.05) 100%)',
            border: '1px solid rgba(255, 215, 0, 0.2)',
            borderRadius: '20px',
            padding: '1.5rem',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Não encontrou sua região?
          </h3>
          <p style={{ color: '#9ca3af', marginBottom: '1.5rem', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
            Atendemos em diversas outras localidades do Espírito Santo. Entre em contato para verificar disponibilidade na sua área!
          </p>
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp size={20} />
            Consultar Disponibilidade
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
