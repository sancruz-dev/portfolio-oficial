import { Home } from '../../components/sections/Home';
import { About } from '../../components/sections/About';
import { Skills } from '../../components/sections/Skills';
import { Services } from '../../components/sections/Services';
import { Work } from '../../components/sections/Work';
import { Testimonials } from '../../components/sections/Testimonials';
import { Contact } from '../../components/sections/Contact';

function Main() {
   return <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Work />
      <Testimonials />
      <Contact />
   </main>
}

export default Main
