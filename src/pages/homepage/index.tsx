import Navbar from '../../components/navbar';
import HeroSection from '../../components/hero-section';
import PackageHighlights from 'components/package-highlights';
import ServicesOverview from 'components/services-overview';
import GallerySection from 'components/gallery-section';
import VisaRequirements from 'components/visa-requirements';
import Footer from 'components/footer';

function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PackageHighlights />
      <ServicesOverview />
      <GallerySection />
      <VisaRequirements />
      <Footer />
    </main>
  );
}

export default HomePage;