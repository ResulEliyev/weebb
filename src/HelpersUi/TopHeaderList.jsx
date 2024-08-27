import { Link } from "react-router-dom";

export default ({ nav }) => {
  return (
    <li>
      <Link to={nav.path} style={{
        display: 'flex',
        alignItems:"center"
        }}>
        {<nav.icon className="text-[#2a96ff] mr-[5px]"/>} <span>{nav.label}</span>
      </Link>
    </li>
  );
};
