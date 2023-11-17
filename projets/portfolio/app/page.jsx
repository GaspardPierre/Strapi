"use client"; // This is a client component
import React ,{ useState} from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import AboutSection from './components/AboutSection'
import ProjectsList from './components/ProjectList';
export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

  <div className='bg-gradient-to-r from-section to-section-2 '>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className={`main-content ${isMenuOpen ? 'blur-sm' : ''}`}>
        
        <Section/>
   
     <AboutSection/>
     <ProjectsList />
    
     
      </main>
      <Footer/>
    </div>
 
  )
}
