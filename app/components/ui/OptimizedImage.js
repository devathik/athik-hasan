import Image from 'next/image';

const OptimizedImage = ({ src, alt, width, height, className }) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
    loading="lazy"
  />
);

export default OptimizedImage; 