import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Header />
      <main className="container my-4">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
