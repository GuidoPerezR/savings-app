import { Footer } from '@/components/layout/Footer.tsx';
import { Outlet } from 'react-router';

export default function PublicLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
