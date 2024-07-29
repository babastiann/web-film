import React from "react";
import Trailer from "../Fragments/Trailer";
import CastList from "./CastList";
import MovieSynopsis from "./MovieSynopsis";
import SeasonSection from "./SeasonSection";
import PosterCarousel from "../Fragments/PosterCarousel";

const MovieDetailTemplate = ({ trailerUrl, movieDetails, cast, posters, seasons, episodes }) => {
  console.log("Seasons:", seasons);
  console.log("Episodes:", episodes); 

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      {trailerUrl && <Trailer url={trailerUrl} />}
      {seasons && seasons.length > 0 && (
        <SeasonSection seasons={seasons} episodes={episodes} />
      )}
      <MovieSynopsis {...movieDetails} />
      {cast.length > 0 && <CastList cast={cast} />}
      {posters.length > 0 && <PosterCarousel posters={posters} />}
    </div>
  );
};

export default MovieDetailTemplate;
