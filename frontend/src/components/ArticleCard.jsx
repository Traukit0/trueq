import React from 'react';
import { FaTag, FaMapMarkerAlt, FaEdit, FaTrash } from 'react-icons/fa';

const ArticleCard = ({ article, onEdit, onDelete }) => {
  const { title, description, imageUrl, category, location, status, value } = article;

  return (
    <div className="card mb-4 position-relative">
      <div className={`status-badge ${status === 'Disponible' ? 'status-available' : 'status-unavailable'}`}>
        {status}
      </div>
      <div className="img-placeholder">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="card-img-top" 
            style={{ objectFit: 'cover' }} 
          />
        ) : (
          <div className="text-center text-muted">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="48" 
              height="48" 
              fill="currentColor" 
              className="bi bi-image" 
              viewBox="0 0 16 16"
            >
              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
            </svg>
          </div>
        )}
      </div>
      <div className="card-body p-3">
        <h5 className="card-title mb-1">{title}</h5>
        <div className="d-flex align-items-center mb-2">
          <FaTag className="text-primary me-1" size={12} />
          <span className="text-muted small">{category}</span>
        </div>
        <p className="card-text text-start small mb-2" style={{ fontSize: '0.85rem' }}>
          {description}
        </p>
        <div className="d-flex justify-content-between align-items-center mb-1">
          <div className="d-flex align-items-center">
            <FaMapMarkerAlt className="text-muted me-1" size={12} />
            <span className="text-muted small">{location}</span>
          </div>
          <div>
            <span className="fw-bold">{value}</span>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <button
            onClick={() => onEdit(article)}
            className="btn btn-sm btn-outline-secondary py-1 px-2"
          >
            <FaEdit className="me-1" size={12} /> Editar
          </button>
          <button
            onClick={() => onDelete(article.id)}
            className="btn btn-sm btn-outline-danger py-1 px-2"
          >
            <FaTrash className="me-1" size={12} /> Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard; 