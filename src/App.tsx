import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GamePlatforms from './components/GamePlatforms';
import LiveWithdrawals from './components/LiveWithdrawals';
import PlayerReviews from './components/PlayerReviews';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <GamePlatforms />
        <LiveWithdrawals />
        <PlayerReviews />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;