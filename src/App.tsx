import Header from './components/Header';
import Hero from './components/Hero';
import GamePlatforms from './components/GamePlatforms';
import LiveWithdrawals from './components/LiveWithdrawals';
import PlayerReviews from './components/PlayerReviews';
import Certifications from './components/Certifications';
import Provider from './components/Provider';
import AboutUs from './components/AboutUs';
import AboutTopPokiesAustraliaPage from './components/AboutTopPokiesAustraliaPage';
import Footer from './components/Footer';

function App() {
  const pathname = window.location.pathname.replace(/\/$/, '');
  const isAboutTopPokiesPage = pathname === '/about-toppokiesaustralia';

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {isAboutTopPokiesPage ? (
          <AboutTopPokiesAustraliaPage />
        ) : (
          <>
            <Hero />
            <GamePlatforms />
            <LiveWithdrawals />
            <PlayerReviews />
            <Provider />
            <AboutUs />
            <Certifications />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;