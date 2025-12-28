import { Footer } from '@/components/layout/Footer.tsx';
import { Outlet } from 'react-router';

export const PublicLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
