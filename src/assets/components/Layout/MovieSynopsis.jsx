import Heading from '../Elements/Heading';
import Text from '../Elements/Text';

const MovieSynopsis = ({ title, overview, releaseDate, rating, genres }) => {
  const genreText = genres ? genres.map(genre => genre.name).join(', ') : 'No genres available';

  return (
    <div className="movie-synopsis">
      <Heading level={1} className="movie-title text-3xl text-white mt-3 mb-5">{title}</Heading>
      <Text className="movie-genre mb-3">Genres: {genreText}</Text>
      <Text className="movie-overview mb-3">{overview}</Text>
      <Text className="movie-release-date mb-3">Release Date: {releaseDate}</Text>
      <Text className="movie-rating mb-3">Rating: {rating}</Text>
    </div>
  );
};

export default MovieSynopsis;
