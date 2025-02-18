import { FC } from 'react';
import heroImage from '../../assets/hero.jpg';

const HeroSection: FC = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Hero Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-start z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-2xl">
          Your Trusted Partner for Hajj and Umrah Journey
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
          Experience a spiritual journey like never before with our comprehensive travel packages and expert guidance
        </p>
        <button
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300"
          onClick={() => {
            // Add navigation or scroll to packages section
          }}
        >
          Explore Packages
        </button>
      </div>
    </section >
  );
}

export default HeroSection;