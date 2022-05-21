import 'swiper/css';
import 'swiper/css/pagination';

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
  return <>
    <Header />
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Work />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </>
}

export default App
