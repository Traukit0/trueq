import React from 'react';
import ArticleList from './ArticleList';

const HomePage = ({ articles, onEdit, onDelete, loading, error }) => {
  return (
    <div className="container py-4">
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4">Artículos Disponibles</h2>
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
              <p className="mt-2">Cargando artículos...</p>
            </div>
          ) : (
            <ArticleList
              articles={articles}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage; 