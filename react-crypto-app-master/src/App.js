import './App.css';
import Navbar from './components/Navbar';
import Price from './components/Price';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Carousel from './components/Carousel';
function App() {
  return (
    <BrowserRouter>

      <div className='App'>
        <Navbar />
        <Carousel />
        <Routes>

          <Route path='/' element={<Price />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
