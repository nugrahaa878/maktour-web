import { FC } from 'react';

interface PackageFeature {
  icon: string;
  text: string;
}

interface Package {
  title: string;
  image: string;
  description: string;
  price: string;
  features: PackageFeature[];
}

const packages: Package[] = [
  {
    title: 'Premium Hajj Package',
    image: '/src/assets/images/mekah-1.jpg',
    description: 'Experience the ultimate Hajj journey with premium accommodations and dedicated services',
    price: 'Starting from $8,999',
    features: [
      { icon: '🏨', text: '5-star hotel accommodations' },
      { icon: '🍽️', text: 'Full-board meals' },
      { icon: '👤', text: 'Dedicated guide' }
    ]
  },
  {
    title: 'Standard Umrah Package',
    image: '/src/assets/images/mekah-2.jpg',
    description: 'Complete your Umrah with our comprehensive and comfortable package',
    price: 'Starting from $3,999',
    features: [
      { icon: '🏨', text: '4-star hotel accommodations' },
      { icon: '✈️', text: 'Return flights included' },
      { icon: '🚌', text: 'Ground transportation' }
    ]
  },
  {
    title: 'Family Umrah Package',
    image: '/src/assets/images/mekah-3.jpg',
    description: 'Special package designed for families with children-friendly accommodations',
    price: 'Starting from $12,999',
    features: [
      { icon: '👨‍👩‍👧‍👦', text: 'Family rooms available' },
      { icon: '🍽️', text: 'Special meal options' },
      { icon: '📱', text: '24/7 support service' }
    ]
  }
];

const PackageHighlights: FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated packages designed to provide you with the best spiritual journey experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span>{feature.icon}</span>
                      <span className="text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-emerald-600">{pkg.price}</span>
                  <button
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
                    onClick={() => {
                      // Add booking logic here
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageHighlights;