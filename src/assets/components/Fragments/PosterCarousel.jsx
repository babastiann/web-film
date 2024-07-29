import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PosterCarousel = ({ posters }) => {
  
  const limitedPosters = posters.slice(0, 10);

  if (!limitedPosters.length) {
    return <p>No posters available</p>;
  }

  return (
    <div className="poster-carousel">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {limitedPosters.map((poster) => (
          <SwiperSlide key={poster.file_path}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster.file_path}`}
              alt={poster.title || 'Poster'}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PosterCarousel;
