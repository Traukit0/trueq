import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleList = ({ articles, onEdit, onDelete }) => {
  return (
    <div>
      <h2 className="fs-4 mb-4">Mis artículos</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {articles.map((article) => (
          <div className="col" key={article.id}>
            <ArticleCard 
              article={article} 
              onEdit={onEdit} 
              onDelete={onDelete} 
            />
          </div>
        ))}
      </div>
      {articles.length === 0 && (
        <div className="alert alert-info text-center">
          No hay artículos disponibles. ¡Agrega uno nuevo!
        </div>
      )}
    </div>
  );
};

export default ArticleList; 