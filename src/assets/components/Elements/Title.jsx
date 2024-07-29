const Title = ({ children, className }) => {
    return (
      <h3 className={`text-sm font-semibold text-white truncate max-w-full ${className}`}>
        {children}
      </h3>
    );
  };
  
  export default Title;
  