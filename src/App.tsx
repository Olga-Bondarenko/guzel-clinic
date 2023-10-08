import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='all-services'  element={<Services />} />

          <Route path='services' element={<ServiceLayout />}>
            <Route path='/services/:service' element={<Method />} />
            <Route path='/services/:service/:slug' element={<SingleService />} />
          </Route>
          <Route path='price-list' element={<PriceList />} />
          <Route path='contacts' element={<Contacts />} />
        </Route>

        {/* <Route path="/services/laser-cosmetology" element={<Laser />} /> */}
        {/* <Route path="/services/:slug" element={<Services />} /> */}
        {/* <Route path='*' element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
