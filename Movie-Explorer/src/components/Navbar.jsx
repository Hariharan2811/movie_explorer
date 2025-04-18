<<<<<<< HEAD
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 sticky-top">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.8rem",
          }}
        >
          🎬 Movie Explorer
        </a>

        <div className="d-flex gap-2">
          <a href="http://localhost:5173/" className="btn btn-outline-light">
            Home
          </a>
          <a href="#" className="btn btn-warning text-dark fw-semibold">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
=======
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 sticky-top">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.8rem",
          }}
        >
          🎬 Movie Explorer
        </a>

        <div className="d-flex gap-2">
          <a href="http://localhost:5173/" className="btn btn-outline-light">
            Home
          </a>
          <a href="#" className="btn btn-warning text-dark fw-semibold">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
>>>>>>> 0d1b158 (Feat: Completed Home UI and API call All done now to complete login and signup)
