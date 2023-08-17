import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ContactsPage from './pages/ContactsPage';
import './App.css';
import BooksPage from './pages/BooksPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
