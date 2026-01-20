const PLACEHOLDER_PHOTOS = [
  { id: 1, caption: "Coffee & Code", rotation: "-rotate-3" },
  { id: 2, caption: "Team hackathon!", rotation: "rotate-2" },
  { id: 3, caption: "Exploring nature", rotation: "-rotate-1" },
  { id: 4, caption: "Late night debugging", rotation: "rotate-3" },
  { id: 5, caption: "Conference vibes", rotation: "-rotate-2" },
];

const PHOTOS = [
  {
    id: 1,
    src: "/images/mushroom.jpg",
    caption: "do not eat this",
    rotation: "-rotate-3",
  },
  {
    id: 2,
    src: "/images/pottery.jpg",
    caption: "super chickens",
    rotation: "rotate-2",
  },
  {
    id: 3,
    src: "/images/climbing.jpg",
    caption: "climbing",
    rotation: "-rotate-1",
  },
  {
    id: 4,
    src: "/images/pikachu.jpg",
    caption: "pikachu in a bag",
    rotation: "rotate-3",
  },
  {
    id: 5,
    src: "/images/lake.jpg",
    caption: "moraine lake",
    rotation: "-rotate-2",
  },
];


const PhotoGallery = () => {
  return (
    <section
      id="photos"
      className="min-w-[700px] h-full flex flex-col justify-center px-8 py-8"
    >
      <h2 className="text-4xl font-handwritten text-foreground mb-8 text-center">
        pictures from my adventures
      </h2>

      <div className="flex flex-wrap gap-6 justify-center items-center max-w-[600px]">
        {PHOTOS.map((photo, index) => (
          <div
            key={photo.id}
            className={`
        polaroid ${photo.rotation}
        hover:rotate-0 hover:scale-105 transition-all duration-300
        cursor-pointer
      `}
            style={{
              marginTop: index % 2 === 0 ? "20px" : "0px",
            }}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-36 h-36 object-cover"
            />

            <p className="font-sketch text-sm text-foreground/80 mt-2 text-center">
              {photo.caption}
            </p>
          </div>
        ))}
      </div>


      {/* Decorative tape */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-sticky-yellow/60 rotate-3" />
    </section>
  );
};

export default PhotoGallery;
