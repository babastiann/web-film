import { Link } from 'react-router-dom';
import Image from "../Elements/Image";
import Title from "../Elements/Title";
import "boxicons";

const PosterCard = ({ src, title, rating, year, id, mediaType }) => {
    if (!id || !mediaType) {
      console.error('PosterCard requires both id and mediaType props.');
      return null;
    }
  
    console.log({ src, title, rating, year, id, mediaType }); 
  
    
    const detailLink = mediaType === 'tv' ? `/movieDetails/tv/${id}` : `/movieDetails/movie/${id}`;
  
    return (
      <div className="rounded-lg overflow-hidden my-4 w-40 relative group">
        <div className="relative">
          <Link to={detailLink} className="block">
            <Image
              src={src}
              alt={title}
              className="object-cover h-80 w-full transition duration-300 ease-in-out transform group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <box-icon name="play-circle" color="white" size="lg"></box-icon>
            </div>
          </Link>
        </div>
        <div className="p-4">
          <Title>{title}</Title>
          <p className="text-slate-400 text-sm">{year}</p>
        </div>
        <div className="absolute top-0 left-0 p-2 text-white bg-black bg-opacity-50 rounded-br-lg">
          <box-icon type="solid" color="yellow" size="xs" name="star"></box-icon>
          {rating}
        </div>
      </div>
    );
  };
  

export default PosterCard;
