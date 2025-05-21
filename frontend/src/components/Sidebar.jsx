import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/nuevo" className="sidebar-link">
              <span className="sidebar-icon"><FaPlus /></span>
              <span className="sidebar-text">Nuevo TrueQ</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/" className="sidebar-link">
              <span className="sidebar-icon"><FaList /></span>
              <span className="sidebar-text">Mis TrueQs</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/dashboard" className="sidebar-link">
              <span className="sidebar-icon"><FaChartBar /></span>
              <span className="sidebar-text">Dashboard</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;