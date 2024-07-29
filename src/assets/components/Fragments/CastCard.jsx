import Image from "../Elements/Image";
import Text from "../Elements/Text";

const CastCard = ({ image, name, character }) => {
  return (
    <div className="cast-card text-center flex flex-col items-center">
      <div className="ring-primary ring-offset-base-100 w-24 h-24 rounded-full ring ring-offset-2 overflow-hidden">
        <Image src={image} alt={name} className="cast-image w-full h-full object-cover" />
      </div>
      <Text className="cast-name mt-2 font-semibold">{name}</Text>
      <Text className="cast-character text-gray-500">{character}</Text>
    </div>
  );
};

export default CastCard;
