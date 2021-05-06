import React from "react";
import { useGlobalContext } from "./contest";
import { MdFlightLand, MdClose } from "react-icons/md";
import { links } from "./data";

function Sidebar() {
  const { showSidebar, closeSidebar } = useGlobalContext();
  console.log();
  return (
    <aside className={`sidebar ${showSidebar && "show-sidebar"}`}>
      <div className="sidebar-header">
        <div className="logo">
          <MdFlightLand />
          <h4>AirGo</h4>
        </div>
        <button className="close-sidebar" onClick={closeSidebar}>
          <MdClose />
        </button>
      </div>
      <div className="links-container">
        <ul>
          {links.map((item) => {
            const { label, id, link } = item;
            return (
              <li key={id} className="link">
                <a href={link}>{label}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
