import CastCard from "../Fragments/CastCard";

const CastList = ({ cast }) => {
  return (
    <div className="cast-list flex flex-wrap my-5 px-5 gap-4">
      <h1>Cast</h1>
      {cast.map((member) => (
        <CastCard key={member.id} image={member.profile_path ? `https://image.tmdb.org/t/p/w200${member.profile_path}` : "placeholder.jpg"} name={member.name} character={member.character} />
      ))}
    </div>
  );
};

export default CastList;
