import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaStar, FaQuoteLeft, FaGoogle } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Adenis de Sá',
    initial: 'A',
    text: 'Profissional extremamente solícito e atencioso. Veio até minha residência, foi pontual, explicou tudo com muita clareza e demonstrou total domínio em instalações elétricas. Demonstrou flexibilidade de horário e compromisso com o serviço. Recomendo fortemente!',
    rating: 5,
    date: 'Há 2 semanas',
  },
  {
    name: 'Rafael Veneroso Morici',
    initial: 'R',
    text: 'Profissional excelente e educado, me explicou todo o processo, me mostrou o que estava errado na instalação antiga, muito caprichoso. Nota mil!!!!!!',
    rating: 5,
    date: 'Há 18 semanas',
  },
  {
    name: 'Gleidson Rocha',
    initial: 'G',
    text: 'Serviço elétrico excelente realizado em Nova Almeida, Serra ES. Profissional muito competente e atencioso. Super recomendo para qualquer serviço elétrico!',
    rating: 5,
    date: 'Há 4 semanas',
  },
]

function TestimonialCard({ testimonial, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -5 }}
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Quote Icon Background */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        opacity: 0.1,
      }}>
        <FaQuoteLeft size={60} color="#FFD700" />
      </div>

      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.25rem',
      }}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          style={{
            width: '56px',
            height: '56px',
            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '1.5rem',
            color: '#0f0f0f',
          }}
        >
          {testimonial.initial}
        </motion.div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.25rem' }}>
            {testimonial.name}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} size={14} color="#FFD700" />
              ))}
            </div>
            <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>
              {testimonial.date}
            </span>
          </div>
        </div>
      </div>

      {/* Text */}
      <p style={{
        color: '#d1d5db',
        fontSize: '0.95rem',
        lineHeight: 1.8,
        marginBottom: '1.25rem',
      }}>
        "{testimonial.text}"
      </p>

      {/* Google Badge */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: '#6b7280',
        fontSize: '0.8rem',
      }}>
        <FaGoogle size={14} />
        Avaliação verificada no Google
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="avaliacoes" style={{
      padding: '6rem 1rem',
      background: '#0f0f0f',
      position: 'relative',
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>
            O que nossos <span>clientes dizem</span>
          </h2>
          <p>Mais de 52 avaliações 5 estrelas no Google</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '3rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              5.0
            </div>
            <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Nota no Google</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '3rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              52+
            </div>
            <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Avaliações</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '3rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              100%
            </div>
            <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Satisfação</div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Google Reviews Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            textAlign: 'center',
            marginTop: '2.5rem',
          }}
        >
          <motion.a
            href="https://maps.app.goo.gl/orT4AUizHyemHpgq6"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#FFD700',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            <FaGoogle size={18} />
            Ver todas as avaliações no Google →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
