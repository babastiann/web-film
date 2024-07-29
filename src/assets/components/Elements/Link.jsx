import { Link as RouterLink } from "react-router-dom";

const Link = ({ children, to, className, props }) => {
  return (
    <div>
      <RouterLink to={to} className={` ${className}`} {...props}>
        {children}
      </RouterLink>
    </div>
  );
};

export default Link;
