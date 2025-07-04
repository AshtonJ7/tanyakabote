import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Clients from './Clients'
import Contact from './Contact'
import Newsletter from './Newsletter'
import Footer from './Footer'

const Home = () => {
  return (
    <div className="container min-w-full min-h-lvh secondary-font">
      <NavBar />
      <section className="w-full max-h-fit pt-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-yellow-800">
        <Hero />
      </section>
      <section id="about" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-yellow-800">
        <About />
      </section>
      <section id="services" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-yellow-800">
        <Services />
      </section>
      <section id="portfolio" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-yellow-800">
        <Portfolio />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-yellow-800">
        <Clients />
      </section>
      <section id="contact" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-yellow-800">
        <Contact />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-yellow-800">
        <Newsletter />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-yellow-800">
        <Footer />
      </section>
    </div>
  )
}

export default Home