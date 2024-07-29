import Image from "../Elements/Image";

const CarouselItem = ({ movie, genres }) => {
  
  const movieGenres = movie.genre_ids
    .map((genreId) => {
      const genre = genres.find((g) => g.id === genreId);
      return genre ? genre.name : "";
    })
    .join(", ");

  
  const cast = movie.credits.cast.slice(0, 5).map(castMember => castMember.name).join(', ');

  return (
    <div className="relative w-full h-80 sm:h-96 md:h-[500px] lg:h-[600px] xl:h-[700px]">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 lg:p-6">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-300 mb-2">{movie.title}</h2>
        <p className="text-gray-400 text-sm lg:text-base mb-1">{movie.overview}</p>
        <p className="text-gray-400 text-sm lg:text-base mb-1">Rating: {movie.vote_average.toFixed(1)}</p>
        <p className="text-gray-400 text-sm lg:text-base mb-1">Year: {movie.release_date.split('-')[0]}</p>
        <p className="text-gray-400 text-sm lg:text-base mb-1">Genre: {movieGenres}</p>
        <p className="text-gray-400 text-sm lg:text-base mb-1">Cast: {cast}</p>
      </div>
    </div>
  );
};

export default CarouselItem;
