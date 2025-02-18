import Navbar from '../../components/navbar';
import HeroSection from '../../components/hero-section';

function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <footer className="mt-auto py-4">
        {/* Footer content */}
      </footer>
    </main>
  );
}

export default HomePage;