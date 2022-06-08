import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
 
function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
} 

export default App
