import Navbar from '../../components/navbar';
import HeroSection from '../../components/hero-section';
import PackageHighlights from 'components/package-highlights';

function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PackageHighlights />
      <footer className="mt-auto py-4">
        {/* Footer content */}
      </footer>
    </main>
  );
}

export default HomePage;