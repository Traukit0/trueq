import React from 'react';
import { FaBoxOpen, FaExchangeAlt, FaListAlt, FaMapMarkerAlt, FaDollarSign, FaChartBar } from 'react-icons/fa';

const Dashboard = () => {
  // Datos dummy para las métricas
  const metrics = {
    totalArticles: 128,
    availableArticles: 87,
    exchangedArticles: 41,
    averageValue: 22300,
    topCategories: [
      { name: 'Deportes', count: 32 },
      { name: 'Servicios', count: 28 },
      { name: 'Libros', count: 24 }
    ],
    topCities: [
      { name: 'Castro', count: 45 },
      { name: 'Puerto Varas', count: 30 },
      { name: 'Ancud', count: 18 }
    ]
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4">Dashboard</h2>
          
          {/* Métricas principales */}
          <div className="row mb-4">
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body d-flex flex-column align-items-center">
                  <FaBoxOpen className="text-primary mb-3" style={{ fontSize: '2.5rem' }} />
                  <h5 className="card-title">Total Artículos</h5>
                  <p className="card-text fs-1 fw-bold">{metrics.totalArticles}</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body d-flex flex-column align-items-center">
                  <FaListAlt className="text-success mb-3" style={{ fontSize: '2.5rem' }} />
                  <h5 className="card-title">Artículos Disponibles</h5>
                  <p className="card-text fs-1 fw-bold">{metrics.availableArticles}</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body d-flex flex-column align-items-center">
                  <FaExchangeAlt className="text-danger mb-3" style={{ fontSize: '2.5rem' }} />
                  <h5 className="card-title">Artículos Intercambiados</h5>
                  <p className="card-text fs-1 fw-bold">{metrics.exchangedArticles}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Métricas secundarias */}
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <FaChartBar className="text-primary me-2" style={{ fontSize: '1.5rem' }} />
                    <h5 className="card-title mb-0">Categorías Populares</h5>
                  </div>
                  <ul className="list-group">
                    {metrics.topCategories.map((category, index) => (
                      <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {category.name}
                        <span className="badge bg-primary rounded-pill">{category.count}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <FaMapMarkerAlt className="text-danger me-2" style={{ fontSize: '1.5rem' }} />
                    <h5 className="card-title mb-0">Ciudades Destacadas</h5>
                  </div>
                  <ul className="list-group">
                    {metrics.topCities.map((city, index) => (
                      <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {city.name}
                        <span className="badge bg-danger rounded-pill">{city.count}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body d-flex flex-column align-items-center">
                  <FaDollarSign className="text-success mb-3" style={{ fontSize: '2.5rem' }} />
                  <h5 className="card-title">Valor Promedio</h5>
                  <p className="card-text fs-1 fw-bold">
                    ${metrics.averageValue.toLocaleString('es-CL')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 