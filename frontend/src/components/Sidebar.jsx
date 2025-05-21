import React from 'react';
import './Sidebar.css';
import { FaPlus, FaList, FaChartBar } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <img src={logo} alt="TrueQ Logo" className="sidebar-logo" />
          <span className="sidebar-title">TrueQ</span>
        </div>
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