export const VideoPlayer = () => {
  return (
    <>
      <iframe
        width="100%"
        className="aspect-video"
        src="https://www.youtube.com/embed/MDCp_rjGCrQ?si=03sslivD7PVdNSjI"
        title="Some video title"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </>
  );
};
