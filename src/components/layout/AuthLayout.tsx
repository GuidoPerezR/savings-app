import { Outlet } from 'react-router';
import { Menu } from '@/components/layout/Menu.tsx';

export const AuthLayout = () => {
  return (
    <>
      <Outlet />
      <Menu />
    </>
  );
};
