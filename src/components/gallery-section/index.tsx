import { useEffect, useRef, useState } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
}

const GallerySection = () => {
  const [images] = useState<GalleryImage[]>([
    {
      id: 1,
      src: '/src/assets/gallery-1.jpg',
      title: 'Masjid Al-Haram',
      description: 'Pilgrims performing Tawaf around the Kaaba'
    },
    {
      id: 2,
      src: '/src/assets/gallery-2.jpg',
      title: 'Madinah Visit',
      description: 'Group visit to Masjid An-Nabawi'
    },
    {
      id: 3,
      src: '/src/assets/gallery-3.jpg',
      title: 'Mount Arafat',
      description: 'Day of Arafah during Hajj'
    },
    {
      id: 4,
      src: '/src/assets/gallery-4.jpg',
      title: 'Mina Stay',
      description: 'Accommodations during the days of Tasyrik'
    },
    {
      id: 5,
      src: '/src/assets/gallery-5.jpg',
      title: 'Group Prayer',
      description: 'Congregational prayer at sacred sites'
    },
    {
      id: 6,
      src: '/src/assets/gallery-7.jpg',
      title: 'Ziarah Tour',
      description: 'Visiting historical Islamic sites'
    },
  ]);

  const [loaded, setLoaded] = useState<Set<number>>(new Set());
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleImageLoad = (id: number) => {
    setLoaded(prev => new Set([...prev, id]));
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || isPaused) return;

    const scrollInterval = setInterval(() => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-emerald-800">
          Gallery of Previous Trips
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore the memorable moments from our previous Hajj and Umrah journeys, where faith and community come together in the holy lands.
        </p>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.title}
                className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${loaded.has(image.id) ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => handleImageLoad(image.id)}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll Gallery */}
        <div
          ref={scrollContainerRef}
          className="md:hidden w-full overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="flex space-x-4 w-max">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative flex-none w-80 overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className={`w-full h-full object-cover ${loaded.has(image.id) ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => handleImageLoad(image.id)}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;