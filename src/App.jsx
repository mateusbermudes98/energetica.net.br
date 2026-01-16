import Header from './components/Header'
import UrgencyBar from './components/UrgencyBar'
import Hero from './components/Hero'
import Services from './components/Services'
import Areas from './components/Areas'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <>
      <Header />
      <UrgencyBar />
      <main>
        <Hero />
        <Services />
        <Areas />
        <Testimonials />
        <Gallery />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Electrician",
            "name": "Enérgica Soluções Elétricas - Mateus Eletricista",
            "image": "https://lh3.googleusercontent.com/p/AF1QipOwjlh007b7gokMClEjZM95otfchI97qoYvr9_B=s1360-w1360-h1020-rw",
            "telephone": "+55-27-99941-0684",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "R. Natal, 266",
              "addressLocality": "Praia Grande, Serra",
              "addressRegion": "ES",
              "postalCode": "29187-000",
              "addressCountry": "BR"
            },
            "url": "https://energetica.net.br",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "52"
            },
            "priceRange": "$$",
            "areaServed": [
              "Praia Grande",
              "Jacaraípe",
              "Nova Almeida",
              "Manguinhos",
              "Fundão",
              "Aracruz",
              "Praia Formosa",
              "Santa Cruz",
              "Serra"
            ]
          })
        }}
      />
    </>
  )
}

export default App
