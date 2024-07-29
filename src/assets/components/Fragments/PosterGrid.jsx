import PosterCard from "./PosterCard";

const PosterGrid = ({ posters, mediaType }) => {
    if (!posters || posters.length === 0) {
        return <div className="text-white">No posters available</div>;
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-1">
            {posters.map((poster) => (
                <PosterCard
                    key={poster.id}
                    src={poster.src}
                    title={poster.title}
                    rating={poster.rating}
                    year={poster.year}
                    id={poster.id}
                    mediaType={mediaType} 
                />
            ))}
        </div>
    );
};

export default PosterGrid;
