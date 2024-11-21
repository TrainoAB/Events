import "./VideoGallery.css";

export default function VideoGallery({ videos }) {
  return (
      <section className="video-gallery">
          {videos.map((video, i) => (
              <video
                  className="video-gallery__video"
                  src={video}
                  controls
                  width={484}
                  height={272}
                  alt="Video från eventet"
                  key={i}
              />
          ))}
      </section>
  );
}
