import { Outlet } from 'react-router';
import { Menu } from '@/components/layout/Menu.tsx';

export default function AuthLayout() {
  return (
    <>
      <Outlet />
      <Menu />
    </>
  );
}
