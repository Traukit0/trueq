import React from 'react';
import ArticleForm from './ArticleForm';

const NewArticlePage = ({ onAddArticle, onEditArticle, onCancelEdit, editingArticle }) => {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4">Nuevo TrueQ</h2>
          <ArticleForm 
            onAddArticle={onAddArticle} 
            onEditArticle={onEditArticle}
            onCancelEdit={onCancelEdit}
            editingArticle={editingArticle}
          />
        </div>
      </div>
    </div>
  );
};

export default NewArticlePage; 