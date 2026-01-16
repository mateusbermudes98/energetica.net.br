import { motion } from 'framer-motion'
import { FaBolt, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaInstagram, FaFacebook } from 'react-icons/fa'

const WHATSAPP_LINK = "https://wa.me/5527999410684?text=Olá! Preciso de um eletricista!"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      background: '#0a0a0a',
      borderTop: '1px solid rgba(255, 215, 0, 0.2)',
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 1rem 2rem',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.25rem',
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <FaBolt size={24} color="#0f0f0f" />
              </div>
              <div>
                <div style={{
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  ENÉRGICA
                </div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                  Soluções Elétricas
                </div>
              </div>
            </motion.div>
            <p style={{
              color: '#9ca3af',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
            }}>
              Eletricista profissional no litoral do Espírito Santo. Atendimento 24 horas para emergências elétricas com qualidade e segurança.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#9ca3af',
                  transition: 'all 0.3s',
                }}
              >
                <FaInstagram size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#9ca3af',
                  transition: 'all 0.3s',
                }}
              >
                <FaFacebook size={18} />
              </motion.a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{
              color: '#FFD700',
              fontSize: '1rem',
              fontWeight: 700,
              marginBottom: '1.25rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Contato
            </h3>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '1rem' }}>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: '#d1d5db',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.3s',
                  }}
                  data-gtm-click="whatsapp"
                  data-gtm-location="footer"
                >
                  <FaWhatsapp size={18} color="#25D366" />
                  (27) 99941-0684
                </a>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <a
                  href="tel:+5527999410684"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: '#d1d5db',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                  }}
                  data-gtm-click="phone"
                  data-gtm-location="footer"
                >
                  <FaPhone size={16} color="#FFD700" />
                  (27) 99941-0684
                </a>
              </li>
              <li>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  color: '#9ca3af',
                  fontSize: '0.95rem',
                }}>
                  <FaMapMarkerAlt size={18} color="#FFD700" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>
                    R. Natal, 266 - Praia Grande<br />
                    Serra - ES, 29187-000
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 style={{
              color: '#FFD700',
              fontSize: '1rem',
              fontWeight: 700,
              marginBottom: '1.25rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Horário
            </h3>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}>
              <FaClock size={18} color="#FFD700" />
              <span style={{ color: '#d1d5db', fontSize: '0.95rem' }}>
                Atendimento 24 horas
              </span>
            </div>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Atendemos todos os dias, inclusive feriados. Emergências elétricas não têm hora para acontecer!
            </p>
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1rem',
                padding: '0.75rem 1.25rem',
                background: 'rgba(37, 211, 102, 0.1)',
                border: '1px solid rgba(37, 211, 102, 0.3)',
                borderRadius: '50px',
                color: '#25D366',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 600,
              }}
              data-gtm-click="whatsapp"
              data-gtm-location="footer-hours"
            >
              <FaWhatsapp size={18} />
              Fale Conosco
            </motion.a>
          </div>

          {/* Areas */}
          <div>
            <h3 style={{
              color: '#FFD700',
              fontSize: '1rem',
              fontWeight: 700,
              marginBottom: '1.25rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Áreas Atendidas
            </h3>
            <p style={{
              color: '#9ca3af',
              fontSize: '0.95rem',
              lineHeight: 1.8,
            }}>
              Praia Grande, Jacaraípe, Nova Almeida, Manguinhos, Fundão, Aracruz, Praia Formosa, Santa Cruz, Barra do Saí e toda região do litoral do ES.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          textAlign: 'center',
        }}>
          <p style={{
            color: '#6b7280',
            fontSize: '0.875rem',
            marginBottom: '0.5rem',
          }}>
            © {currentYear} Enérgica Soluções Elétricas - Mateus Eletricista. Todos os direitos reservados.
          </p>
          <p style={{
            color: '#4b5563',
            fontSize: '0.75rem',
          }}>
            Desenvolvido por{' '}
            <a
              href="https://tecnovix.com.br"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#FFD700',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              @tecnovix
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
