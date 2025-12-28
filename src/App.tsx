import '@fontsource-variable/plus-jakarta-sans/index.css';
import { Route, Routes } from 'react-router';
import { HomePage } from '@/pages/Home.tsx';
import { Header } from '@/components/layout/Header.tsx';
import { LoginPage } from '@/pages/Login.tsx';
import { ProtectedRoute } from '@/components/routes/ProtectedRoute.tsx';
import { Dashboard } from '@/pages/Dashboard.tsx';
import { PublicLayout } from '@/components/layout/PublicLayout.tsx';
import { AuthLayout } from '@/components/layout/AuthLayout.tsx';

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
        </Route>
      </Routes>
    </>
  );
}

export default App;
