import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';
import Footer from './Footer.jsx';
import data from './assets/data.json';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <Header onSearchQueryChange={handleSearchQueryChange} />
      <Gallery data={data.filter(beast => {
        const regex = new RegExp(searchQuery, 'i');
        return regex.test(beast.title) || regex.test(beast.description);
      })} />
      <Footer />
    </div>
  );
}

export default App;