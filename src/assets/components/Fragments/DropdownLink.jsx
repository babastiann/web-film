import { Link as RouterLink } from 'react-router-dom';

const DropdownLink = ({ label, to }) => {
  return (
    <RouterLink
      to={to}
      className="block px-4 py-2 bg-black text-sm text-red-600 hover:bg-gray-200"
    >
      {label}
    </RouterLink>
  );
};

export default DropdownLink;