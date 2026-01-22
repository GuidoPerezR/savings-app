import '@fontsource-variable/plus-jakarta-sans/index.css';
import { Route, Routes } from 'react-router';

import { HomePage } from '@/pages/Home.tsx';
import { HistoryPage } from '@/pages/History.tsx';
import { LoginPage } from '@/pages/Login.tsx';
import { VerifyEmailPage } from '@/pages/VerifyEmail.tsx';
import { Dashboard } from '@/pages/Dashboard.tsx';

import { Header } from '@/components/layout/Header.tsx';
import { ProtectedRoute } from '@/components/routes/ProtectedRoute.tsx';
import { PublicLayout } from '@/components/layout/PublicLayout.tsx';
import { AuthLayout } from '@/components/layout/AuthLayout.tsx';
import { AddTransactionPage } from '@/pages/AddTransaction.tsx';
import { useEffect } from 'react';
import { supabase } from './lib/supabase';
import { useAuthStore } from './store/authStore';

function App() {
  const setUser = useAuthStore((state) => state.actions.setUser);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
  }, [setUser]);

  return (
    <>
      <Header />

      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
        </Route>

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <AuthLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/dashboard"
            element={
              <>
                <Dashboard />
              </>
            }
          />
          <Route
            path="/add"
            element={
              <>
                <AddTransactionPage />
              </>
            }
          />
          <Route
            path="/history"
            element={
              <>
                <HistoryPage />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
