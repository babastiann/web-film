const Text = ({ children, className }) => {
    return (
      <p className={`text-sm text-white ${className}`}>
        {children}
      </p>
    );
  };
  
  export default Text;