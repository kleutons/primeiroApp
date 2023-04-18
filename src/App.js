import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Atores from './pages/atores/atores';
import Comentarios from './pages/comentarios/comentarios';
import Contato from './pages/contato/contato';
import Home from './pages/home/home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React, { useEffect } from 'react';



function App() {
  
    useEffect(() => {
      document.title = 'Avatar 2 - O Caminho da Água';
    })

  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/atores' element={<Atores />}/>
        <Route path='/comentarios' element={<Comentarios />}/>
        <Route path='/contato' element={<Contato />}/>
      </Routes>
    <Footer />
    </BrowserRouter>      
    </>
  );
}

export default App;
