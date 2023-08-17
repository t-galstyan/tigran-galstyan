import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ContactsPage from './pages/ContactsPage';
import './App.css';
import BooksPage from './pages/BooksPage';
import { ScrollToTop } from './components/hoc/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
