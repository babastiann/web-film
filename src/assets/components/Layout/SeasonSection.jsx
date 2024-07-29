import CollapseItem from "../Fragments/CollapseItem";

const SeasonSection = ({ seasons }) => {
  console.log("Seasons in SeasonSection:", seasons);

  if (!Array.isArray(seasons)) {
    return <p>No seasons data available</p>;
  }

  return (
    <div className="p-4">
      <h3 className="text-2xl font-bold mb-3 mt-4">Seasons</h3>
      {seasons.length > 0 ? (
        seasons.map((season) => (
          <CollapseItem
            key={season.id}
            title={`Season ${season.season_number}`}
            content={
              <div className="space-y-4">
                {season.episodes && season.episodes.length > 0 ? (
                  season.episodes.map((episode) => (
                    <div key={episode.id} className="flex items-start mb-2 space-x-4">
                      <figure>
                        <img
                          src={episode.still_path ? `https://image.tmdb.org/t/p/w300${episode.still_path}` : "https://via.placeholder.com/150"}
                          alt={episode.name}
                          className="h-16 object-cover"
                        />
                      </figure>
                      <div className="flex-1">
                        <h1 className="text-lg font-semibold">
                          Episode {episode.episode_number}: {episode.name}
                        </h1>
                        
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No episodes available</p>
                )}
              </div>
            }
            defaultChecked={false}
          />
        ))
      ) : (
        <p>No seasons available</p>
      )}
    </div>
  );
};

export default SeasonSection;
