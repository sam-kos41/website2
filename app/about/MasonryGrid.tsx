import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function MasonryGrid({ images = [] }) {
  // Check if the images array is empty and return a fallback
  if (!images || images.length === 0) {
    return <p>No images available for the gallery.</p>;
  }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image} alt={`photo-${index}`} className="image-item" />
        </div>
      ))}
    </Masonry>
  );
}
