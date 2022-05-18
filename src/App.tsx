import './assets/styles/styles.css'

import { useEffect } from 'react';

import { Header } from './components/Header';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Services } from './components/sections/Services';
import { Work } from './components/sections/Work';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';

function App() {

  const storeId = "storeId";
  
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "getSelo";
    script.src = `https://imgs.ebit.com.br/ebitBR/selo-ebit/js/getSelo.js?${storeId}`;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <>
    <Header/>
    <Home/>
    <About/>
    <Skills/>
    <Services/>
    <Work/>
    <Testimonials/>
    <Contact/>
    <Footer/>
  </>
}

export default App
