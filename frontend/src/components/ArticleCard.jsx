import React, { useState } from 'react';
import { FaTag, FaMapMarkerAlt, FaEdit, FaTrash } from 'react-icons/fa';

const ArticleCard = ({ article, onEdit, onDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  const handleConfirmDelete = () => {
    onDelete(article.id);
    setShowConfirm(false);
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
  };

  // Asegurarse de que el artículo contenga todos los campos necesarios con valores predeterminados
  const { 
    title = 'Sin título', 
    description = 'Sin descripción', 
    imageUrl = '', 
    category = 'Sin categoría', 
    location = 'Sin ubicación', 
    status = 'Disponible', 
    condition = 'Sin condición', 
    value = 0 
  } = article || {};

  // Función para formatear el valor como precio en pesos chilenos
  const formatPrice = (price) => {
    console.log('Valor recibido para formatear:', price, typeof price);
    
    // Si es null, undefined o string vacío
    if (price === null || price === undefined || price === '') {
      return 'Sin precio';
    }
    
    // Convertir a número si es string
    const numPrice = typeof price === 'string' ? parseInt(price.replace(/[^\d]/g, ''), 10) : Number(price);
    
    // Si no es un número válido
    if (isNaN(numPrice)) {
      return 'Sin precio';
    }
    
    // Formatear como precio en pesos chilenos (incluso si es 0)
    return '$' + numPrice.toLocaleString('es-CL');
  };

  // Función para obtener el color de badge para la condición
  const getConditionColor = (cond) => {
    if (!cond) return 'light';
    
    const condLower = cond.toLowerCase();
    
    switch(condLower) {
      case 'nuevo':
        return 'success';
      case 'como nuevo':
        return 'info';
      case 'usado':
        return 'secondary';
      default:
        return 'light';
    }
  };

  // Estilos para tarjetas uniformes
  const cardStyle = {
    transform: 'none',
    height: '420px',
    display: 'flex',
    flexDirection: 'column'
  };

  const imgContainerStyle = {
    height: '180px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const imgStyle = {
    objectFit: 'cover',
    width: '100%',
    height: '100%'
  };

  const descriptionStyle = {
    fontSize: '0.85rem',
    height: '60px',
    overflow: 'hidden'
  };

  const cardBodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  };

  return (
    <div className="card mb-4 position-relative" style={cardStyle}>
      <div className={`status-badge ${status === 'Disponible' ? 'status-available' : 'status-unavailable'}`}>
        {status}
      </div>
      <div className="img-placeholder" style={imgContainerStyle}>
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="card-img-top" 
            style={imgStyle} 
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
      <div className="card-body p-3" style={cardBodyStyle}>
        <h5 className="card-title mb-1 text-truncate">{title}</h5>
        <div className="d-flex align-items-center mb-2">
          {category && (
            <div className="me-2">
              <FaTag className="text-primary me-1" size={12} />
              <span className="text-muted small">{category}</span>
            </div>
          )}
          {condition && (
            <div>
              <span className={`badge bg-${getConditionColor(condition)} small`}>
                {condition}
              </span>
            </div>
          )}
        </div>
        <div style={descriptionStyle}>
          <p className="card-text text-start small mb-2">
            {description}
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-1 mt-auto">
          {location && (
            <div className="d-flex align-items-center">
              <FaMapMarkerAlt className="text-muted me-1" size={12} />
              <span className="text-muted small text-truncate" style={{ maxWidth: '120px' }}>{location}</span>
            </div>
          )}
          <div>
            <span className="fw-bold">{formatPrice(value)}</span>
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
            onClick={handleDeleteClick}
            className="btn btn-sm btn-outline-danger py-1 px-2"
          >
            <FaTrash className="me-1" size={12} /> Eliminar
          </button>
        </div>

        {showConfirm && (
          <div className="modal" style={{ 
            display: 'block', 
            backgroundColor: 'rgba(0, 0, 0, 0.6)', 
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1050,
            overflow: 'hidden',
            outline: 0
          }}>
            <div className="modal-dialog modal-dialog-centered" style={{
              maxWidth: '400px',
              margin: '1.75rem auto'
            }}>
              <div className="modal-content" style={{
                borderRadius: '12px',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
                border: 'none'
              }}>
                <div className="modal-header" style={{
                  borderBottom: '1px solid #e9ecef',
                  padding: '1rem',
                  backgroundColor: '#f8f9fa',
                  borderTopLeftRadius: '12px',
                  borderTopRightRadius: '12px'
                }}>
                  <h5 className="modal-title" style={{ 
                    color: 'var(--dark-gray)',
                    fontWeight: '500',
                    fontSize: '1.1rem'
                  }}>Confirmar eliminación</h5>
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={handleCancelDelete}
                    style={{ outline: 'none' }}
                  ></button>
                </div>
                <div className="modal-body text-center py-4">
                  <div className="mb-3">
                    <FaTrash size={32} style={{ color: 'var(--danger-color)' }} />
                  </div>
                  <p style={{ fontSize: '1rem' }}>¿Estás seguro de que deseas eliminar este artículo?</p>
                  <p className="text-muted small">Esta acción no se puede deshacer.</p>
                </div>
                <div className="modal-footer" style={{
                  borderTop: '1px solid #e9ecef',
                  padding: '0.75rem',
                  backgroundColor: '#f8f9fa',
                  borderBottomLeftRadius: '12px',
                  borderBottomRightRadius: '12px'
                }}>
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary" 
                    onClick={handleCancelDelete}
                    style={{ 
                      borderRadius: '6px',
                      padding: '0.4rem 1rem'
                    }}
                  >
                    Cancelar
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-danger" 
                    onClick={handleConfirmDelete}
                    style={{ 
                      borderRadius: '6px',
                      padding: '0.4rem 1rem',
                      backgroundColor: 'var(--danger-color)',
                      borderColor: 'var(--danger-color)'
                    }}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;