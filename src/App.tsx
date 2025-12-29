import '@fontsource-variable/plus-jakarta-sans/index.css';
import { Route, Routes } from 'react-router';

import { HomePage } from '@/pages/Home.tsx';
import { HistoryPage } from '@/pages/History.tsx';
import { LoginPage } from '@/pages/Login.tsx';
import { Dashboard } from '@/pages/Dashboard.tsx';

import { Header } from '@/components/layout/Header.tsx';
import { ProtectedRoute } from '@/components/routes/ProtectedRoute.tsx';
import { PublicLayout } from '@/components/layout/PublicLayout.tsx';
import { AuthLayout } from '@/components/layout/AuthLayout.tsx';
import { AddTransactionPage } from '@/pages/AddTransaction.tsx';

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
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
