import '@fontsource-variable/plus-jakarta-sans/index.css';
import { Route, Routes } from 'react-router';
import { HomePage } from './pages/Home.tsx';
import { Header } from './components/layout/Header.tsx';
import { Footer } from './components/layout/Footer.tsx';
import { LoginPage } from './pages/Login.tsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
