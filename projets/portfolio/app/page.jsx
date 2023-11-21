"use client"; // This is a client component
import React ,{ useState} from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import AboutSection from './components/AboutSection'
import ProjectsList from './components/ProjectList';
import ContactSection from'./components/ContactSection';
export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

  <div className='bg-gradient-to-r from-section to-section-2 '>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className={`w-full main-content ${isMenuOpen ? 'blur-sm' : ''}`}>
        
        <Section/>
   
     <AboutSection/>
     <ProjectsList />
     <ContactSection />
    
     
      </main>
      <Footer/>
     
    </div>
 
  )
}
