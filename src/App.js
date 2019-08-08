import React from 'react';
import './App.css';
import PhotoList from './components/PhotoList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <PhotoList />
      </main>
      <Footer />
    </div>
  );
}
export default App;
