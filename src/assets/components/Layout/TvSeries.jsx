import HomeSwipper from "./HomeSwipper";

const TVSeries = () => {
  return (
    <div>
      <HomeSwipper 
        title="Kdrama" 
        fetchURL="https://api.themoviedb.org/3/discover/tv?api_key=99f07600507647393007b8db8128ab9d&with_genres=18&with_original_language=ko&sort_by=first_air_date.desc&vote_count.gte=1" 
         mediaType="tv"
      />
      <HomeSwipper 
        title="Original Netflix" 
        fetchURL="https://api.themoviedb.org/3/discover/tv?api_key=99f07600507647393007b8db8128ab9d&with_networks=213&sort_by=first_air_date.desc&vote_count.gte=1" 
         mediaType="tv"
      />
      <HomeSwipper 
        title="Original Disney+" 
        fetchURL="https://api.themoviedb.org/3/discover/tv?api_key=99f07600507647393007b8db8128ab9d&with_networks=2739&sort_by=first_air_date.desc&vote_count.gte=1" 
         mediaType="tv"
      />
      <HomeSwipper 
        title="Anime" 
        fetchURL="https://api.themoviedb.org/3/discover/tv?api_key=99f07600507647393007b8db8128ab9d&with_genres=16&with_original_language=ja&sort_by=first_air_date.desc&vote_count.gte=1" 
         mediaType="tv"
      />
    </div>
  );
};

export default TVSeries;
