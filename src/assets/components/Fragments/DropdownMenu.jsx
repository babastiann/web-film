const DropdownMenu = ({ children }) => {
  return (
    <div className="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded-md z-10">
      <div>{children}</div>
    </div>
  );
};

export default DropdownMenu;
