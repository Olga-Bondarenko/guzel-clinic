import { HashRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import { About } from './pages/About/About';
import { Home } from './pages/Home/Home';
import { Contacts } from './pages/Contacts/Contacts';

import { MainLayout } from './components/MainLayout.tsx/MainLayout';
import { PriceList } from './pages/PriceList/PriceList';
// import { Laser } from "./components/Laser/Laser";
import { Services } from './pages/Services';

import './App.css';
import { ServiceLayout } from './components/ServiceLayout/ServiceLayout';
import { SingleService } from './pages/SingleService';
import { Method } from './pages/Method';
import { Brands } from './pages/Brands/Brands';
import { Brand } from './pages/Brands/Brand';
import { Product } from './pages/Brands/Product';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='all-services' element={<Services />} />

          <Route path='/brands' element={<Brands />} />
          <Route path='/brands/:brand' element={<Brand />} />
          <Route path='/brands/:brand/:product' element={<Product />} />

          <Route path='services' element={<ServiceLayout />}>
            <Route path='/services/:service' element={<Method />} />
            <Route
              path='/services/:service/:slug'
              element={<SingleService />}
            />
          </Route>

          <Route path='price-list' element={<PriceList />} />
          <Route path='contacts' element={<Contacts />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
