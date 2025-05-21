import React from 'react';
import './Sidebar.css';
import { FaPlus, FaList, FaChartBar } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="hover-area"></div>
      <div className="sidebar">
        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon"><FaPlus /></span>
              <span className="sidebar-text">Nuevo TrueQ</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon"><FaList /></span>
              <span className="sidebar-text">Mis TrueQs</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon"><FaChartBar /></span>
              <span className="sidebar-text">Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar; 