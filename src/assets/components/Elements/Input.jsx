const Input = ({ type, placeholder, className, onChange }) => (
    <input
      type={type}
      placeholder={placeholder}
      className={`border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      onChange={onChange}
    />
  );
  
  export default Input;
  