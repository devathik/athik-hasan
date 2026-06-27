import Image from 'next/image';

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634",
    title: "Creative Art",
    category: "Art"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1508615039623-a25605d2b022",
    title: "Modern Design",
    category: "Design"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    title: "Typography",
    category: "Design"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b",
    title: "Illustration",
    category: "Art"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
    title: "Branding",
    category: "Design"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
    title: "UI Design",
    category: "Web"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e",
    title: "Web Design",
    category: "Web"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
    title: "Graphic Design",
    category: "Design"
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Gallery Header */}
        <h1 className="text-[32px] sm:text-[48px] font-bold text-center mt-1 bg-gradient-to-r from-purple-500 via-red-400 to-pink-400 text-transparent bg-clip-text  drop-shadow-lg">
          Photo Gallery
      </h1>
      <p className="text-gray-300 pb-7 border-b font-light text-center mb-10">
        My Photography Collection are shown here to give you a glimpse of my Personality.
      </p>

        {/* Gallery Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="break-inside-avoid mb-4 group"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-800/50">
                <Image
                  src={image.url}
                  alt={image.title}
                  width={800}
                  height={1200}
                  className="w-full h-auto hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, 
                         (max-width: 768px) 50vw,
                         (max-width: 1024px) 33vw,
                         25vw"
                  quality={75}
                />
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100
                              flex flex-col justify-end p-4
                              transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-lg">
                    {image.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {image.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}