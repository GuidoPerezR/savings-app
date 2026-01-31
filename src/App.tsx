import '@fontsource-variable/plus-jakarta-sans/index.css';
import { Route, Routes } from 'react-router';
import { Header } from '@/components/layout/Header.tsx';
import { ProtectedRoute } from '@/components/routes/ProtectedRoute.tsx';
import { lazy, Suspense, useEffect } from 'react';
import { supabase } from './lib/supabase';
import { useAuthStore } from './store/authStore';

const PublicLayout = lazy(() => import('@/components/layout/PublicLayout.tsx'));
const AuthLayout = lazy(() => import('@/components/layout/AuthLayout.tsx'));
const HomePage = lazy(() => import('@/pages/Home.tsx'));
const LoginPage = lazy(() => import('@/pages/Login.tsx'));
const VerifyEmailPage = lazy(() => import('@/pages/VerifyEmail.tsx'));
const Dashboard = lazy(() => import('@/pages/Dashboard.tsx'));
const AddTransactionPage = lazy(() => import('@/pages/AddTransaction.tsx'));
const HistoryPage = lazy(() => import('@/pages/History.tsx'));

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
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </>
  );
}

export default App;
