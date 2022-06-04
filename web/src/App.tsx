// import 'swiper/css/pagination';
import 'swiper/css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import { WidgetFeedback } from './components/WidgetFeedback';
 
function App() {


  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/" element={<Main />} />
        </Routes>
        <WidgetFeedback />
        <Footer />
    </BrowserRouter>
  );
} 

export default App
