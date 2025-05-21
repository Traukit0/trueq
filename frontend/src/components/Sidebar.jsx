import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="hover-area"></div>
      <div className="sidebar">
        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">Nuevo TrueQ</a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">Mis TrueQs</a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">Dashboard</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar; 