import Image from "next/image";

import "./ImageGallery.css";

// TODO switch out src attribute with provided image
export default function ImageGallery({ images }) {
  return (
      <figure className="image-gallery">
          {images.map((image, i) => (
              <Image
                  className="image-gallery__img"
                  src={"https://picsum.photos/484/272"}
                  width={484}
                  height={272}
                  alt="Platsbild för eventet"
                  key={image + i}
              />
          ))}
      </figure>
  );
}
