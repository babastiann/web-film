import ReactPlayer from 'react-player';

const Trailer = ({ url }) => {
  return (
    <div className="trailer-container">
      <ReactPlayer url={url} width="100%" />
    </div>
  );
};

export default Trailer;
