const Image = ({ src, alt, className }) => {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-full h-auto rounded-lg ${className}`}
      />
    );
  };
  
  export default Image;