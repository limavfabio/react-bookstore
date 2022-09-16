import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BooksView from './pages/BooksView';
import Categories from './pages/Categories';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BooksView />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
