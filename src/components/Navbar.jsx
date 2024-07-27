import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-slate-800 text-white p-10">
      <NavLink to="/"><img src="src\assets\home-icon.png" alt="" /></NavLink>
    </div>
  );
}

export default Navbar;
