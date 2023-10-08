import { useState, useEffect } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Breadcrumps } from '../Breadcrumps/Breadcrumps';
import { Header } from '../Header/Header';

export const MainLayout = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <> {
      !isMobile &&
      <>
     <Header isMobile={false}/>
      
      </>
    }
      {/* <Breadcrumps/> */}
    
      <Outlet/>
    </>
  );
};
