import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const images = [
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipPGAFS877zwbq1l5P7R943sgO28XxN9Gm7Iw5jO=s1360-w1360-h1020-rw",
    alt: "Quadro elétrico organizado",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwA_4nuRLFPM_B0A42idgMfFYAlCypYrieBdVJQXT70xxLHJx5ghlDofviOLOO6SorAD8TSGHLQwmmBsZwUSbm-LynheCnFi4yXVZfJLTC4NPAJsmDugiSJ-L_9uaEcl_w_3_h4UYNRLoE=s1360-w1360-h1020-rw",
    alt: "Instalação de lustre elegante",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipMjWFtub-wL_S5L8DMauIKi1UjgI2fHdnYTMa_F=s1360-w1360-h1020-rw",
    alt: "Serviço elétrico residencial",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipMaEYxONK_SU2RNA2F98ZBvN-PUevZmpNZahgqp=s1360-w1360-h1020-rw",
    alt: "Manutenção elétrica",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipMMpN3lMzauNMXUJ9pBg1MyYdKCFapsiGoZasEp=s1360-w1360-h1020-rw",
    alt: "Instalação elétrica profissional",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipPUU8UGb6Y0evWY5NN-8BLcejUAqa1N5CZr2PAV=s1360-w1360-h1020-rw",
    alt: "Trabalho de eletricista",
  },
]

function GalleryItem({ image, index, onClick }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-30px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      onClick={() => onClick(index)}
      style={{
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        aspectRatio: '4/3',
      }}
    >
      <img
        src={image.src}
        alt={image.alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.5s ease',
        }}
        loading="lazy"
      />

      {/* Overlay on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '1.5rem',
        }}
      >
        <span style={{
          color: '#fff',
          fontWeight: 500,
          fontSize: '0.9rem',
        }}>
          {image.alt}
        </span>
      </motion.div>

      {/* Border glow effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        border: '2px solid transparent',
        borderRadius: '16px',
        transition: 'border-color 0.3s ease',
      }}
      className="gallery-border"
      />

      <style>{`
        .gallery-border:hover {
          border-color: rgba(255, 215, 0, 0.5) !important;
        }
      `}</style>
    </motion.div>
  )
}

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.95)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'rgba(255, 255, 255, 0.1)',
          border: 'none',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: '#fff',
          zIndex: 10,
        }}
      >
        <FaTimes size={24} />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        style={{
          position: 'absolute',
          left: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255, 255, 255, 0.1)',
          border: 'none',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: '#fff',
          zIndex: 10,
        }}
      >
        <FaChevronLeft size={24} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        style={{
          position: 'absolute',
          right: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255, 255, 255, 0.1)',
          border: 'none',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: '#fff',
          zIndex: 10,
        }}
      >
        <FaChevronRight size={24} />
      </button>

      {/* Image */}
      <motion.img
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '90%',
          maxHeight: '85vh',
          objectFit: 'contain',
          borderRadius: '12px',
        }}
      />

      {/* Counter */}
      <div style={{
        position: 'absolute',
        bottom: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#9ca3af',
        fontSize: '0.9rem',
      }}>
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="trabalhos" style={{
      padding: '6rem 1rem',
      background: 'linear-gradient(180deg, #050505 0%, #0f0f0f 100%)',
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
            Nossos <span>Trabalhos</span>
          </h2>
          <p>Veja a qualidade e profissionalismo do nosso serviço</p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {images.map((image, index) => (
            <GalleryItem
              key={index}
              image={image}
              index={index}
              onClick={openLightbox}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={images}
            currentIndex={currentIndex}
            onClose={closeLightbox}
            onPrev={goToPrev}
            onNext={goToNext}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
