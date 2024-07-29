import { Link } from 'react-router-dom';
import Image from "../Elements/Image";
import Title from "../Elements/Title";

const SwipperCard = ({ src, title, releaseDate, rating, link }) => {
  return (
    <div className="card bg-base-100 w-64 shadow-xl relative">
      <figure className="relative">
        <Link to={link} className="block">
          <Image
            src={src}
            alt={title}
            className="object-cover w-full h-80"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
            <box-icon name="play-circle" color="white" size="lg"></box-icon>
          </div>
        </Link>
      </figure>
      <div className="card-body p-4">
        <Title className="card-title text-lg font-bold">{title}</Title>
        <p className="text-sm text-gray-500">{releaseDate}</p>
        <p className="text-sm text-yellow-500">Rating: {rating}</p>
      </div>
    </div>
  );
};

export default SwipperCard;
