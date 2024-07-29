import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwipperCard from "../Fragments/SwipperCard";

const HomeSwipper = ({ title, fetchURL, mediaType }) => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await axios.get(fetchURL);
        setSeries(response.data.results);
      } catch (error) {
        console.error(`Failed to fetch ${mediaType}:`, error);
      }
    };
    fetchSeries();
  }, [fetchURL, mediaType]);

  return (
    <section className="py-8 px-4 sm:px-10">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={1.5}
        breakpoints={{
          640: { slidesPerView: 2.5, spaceBetween: 10 },
          768: { slidesPerView: 3.5, spaceBetween: 15 },
          1024: { slidesPerView: 4.5, spaceBetween: 20 },
        }}
      >
        {series.map((serie) => (
          <SwiperSlide key={serie.id}>
            <SwipperCard
              src={`https://image.tmdb.org/t/p/w300${serie.poster_path}`}
              title={serie.name || serie.title} 
              releaseDate={serie.first_air_date || serie.release_date} 
              rating={serie.vote_average.toFixed(1)}
              link={`/movieDetails/${mediaType}/${serie.id}`} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeSwipper;
