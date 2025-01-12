import React from "react";
import {
  BsDropletHalf,
  BsHouseDoor,
  BsGraphUp,
  BsBell,
  BsPeopleFill,
} from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsDropletHalf className="icon_header" /> CTR
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/home">
            <BsHouseDoor className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/water-level-reports">
            <BsGraphUp className="icon" /> Water Level Reports
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/alerts">
            <BsBell className="icon" /> Alerts
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/users">
            <BsPeopleFill className="icon" /> Users
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/">
          <AiOutlineLogout className="icon" /> Logout
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
