import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./styles/global.css";

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

import Home from './pages/Home/Home';
import Produtos from './pages/Produtos/Produtos'; 
import Sobre from './pages/Sobre/Sobre';  
import Contato from './pages/Contato/Contato'; 

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<h1>Página não encontrada (404)</h1>} />
        </Routes>
      </main>
      <WhatsAppButton />
      <Footer />
    </Router>
  );
}

export default App;