import React, { useState, useEffect } from 'react';
import { createArticle, updateArticle } from '../services/api';

const ArticleForm = ({ onAddArticle, onEditArticle, onCancelEdit, editingArticle }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    category: '',
    location: '',
    status: 'Disponible',
    condition: '',
    value: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  
  // Efecto para cargar los datos del artículo a editar
  useEffect(() => {
    if (editingArticle) {
      console.log('Cargando datos para edición:', editingArticle);
      setFormData({
        title: editingArticle.title || '',
        description: editingArticle.description || '',
        imageUrl: editingArticle.imageUrl || '',
        category: editingArticle.category || '',
        location: editingArticle.location || '',
        status: editingArticle.status || 'Disponible',
        condition: editingArticle.condition || '',
        value: editingArticle.value !== null ? String(editingArticle.value) : ''
      });
    } else {
      // Limpiar el formulario si no hay artículo para editar
      setFormData({
        title: '',
        description: '',
        imageUrl: '',
        category: '',
        location: '',
        status: 'Disponible',
        condition: '',
        value: ''
      });
    }
  }, [editingArticle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Manejar específicamente el campo de valor para asegurar que se envía como número
    if (name === 'value') {
      const newValue = value === '' ? '' : value;
      console.log(`Cambiando valor en formulario: ${newValue}, tipo: ${typeof newValue}`);
      setFormData({
        ...formData,
        [name]: newValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      if (editingArticle) {
        // Estamos editando un artículo existente
        const editedData = {
          ...formData,
          id: editingArticle.id
        };
        
        console.log('Editando artículo con datos:', editedData);
        
        // Llamar a la función de edición que recibimos como prop
        await onEditArticle(editedData);
      } else {
        // Estamos creando un nuevo artículo
        console.log('Creando nuevo artículo con datos:', formData);
        
        // Llamar a la API para crear el artículo
        const createdArticle = await createArticle(formData);
        
        // Llamar al callback del componente padre con el artículo creado
        onAddArticle(createdArticle);
      }
      
      // Limpiar el formulario
      setFormData({
        title: '',
        description: '',
        imageUrl: '',
        category: '',
        location: '',
        status: 'Disponible',
        condition: '',
        value: ''
      });
      
    } catch (error) {
      console.error('Error al procesar el artículo:', error);
      setError(`Error al ${editingArticle ? 'editar' : 'crear'} el artículo. Por favor, inténtalo de nuevo.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (onCancelEdit) {
      onCancelEdit();
    }
  };

  return (
    <div className="card p-4 mb-4">
      <h2 className="fs-4 mb-3">
        {editingArticle ? 'Editar artículo' : 'Agregar nuevo artículo'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Título del artículo *
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Ej: Bicicleta de montaña"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Descripción *
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            placeholder="Describe tu artículo o servicio"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">
            URL de imagen
          </label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            name="imageUrl"
            placeholder="https://ejemplo.com/imagen.jpg"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Categoría
          </label>
          <select
            className="form-select"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Selecciona una categoría</option>
            <option value="Deportes">Deportes</option>
            <option value="Libros">Libros</option>
            <option value="Electrónica">Electrónica</option>
            <option value="Servicios">Servicios</option>
            <option value="Hogar">Hogar</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="condition" className="form-label">
            Condición
          </label>
          <select
            className="form-select"
            id="condition"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
          >
            <option value="">Selecciona una condición</option>
            <option value="Nuevo">Nuevo</option>
            <option value="Usado">Usado</option>
            <option value="Como nuevo">Como nuevo</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Ubicación
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            placeholder="Castro"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Estado
          </label>
          <select
            className="form-select"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Disponible">Disponible</option>
            <option value="No disponible">No disponible</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="value" className="form-label">
            Valor (en pesos)
          </label>
          <input
            type="number"
            className="form-control"
            id="value"
            name="value"
            placeholder="Ej: 25000"
            min="0"
            value={formData.value}
            onChange={handleChange}
            onBlur={() => {
              // Validar al perder el foco que sea un número
              if (formData.value !== '' && isNaN(parseInt(formData.value, 10))) {
                console.error('Valor no válido:', formData.value);
                setError('El valor debe ser un número válido.');
              }
            }}
          />
          <small className="form-text text-muted">
            Ingrese el valor en pesos sin puntos ni comas. Ejemplo: 25000 para $25.000.
          </small>
        </div>

        <div className="d-flex justify-content-between mt-4">
          {editingArticle && (
            <button 
              type="button" 
              className="btn btn-outline-secondary" 
              onClick={handleCancel}
            >
              Cancelar
            </button>
          )}
          <button 
            type="submit" 
            className={`btn btn-success ${!editingArticle ? 'w-100' : 'px-4'}`}
            disabled={isSubmitting}
          >
            {isSubmitting 
              ? (editingArticle ? 'Guardando...' : 'Creando...') 
              : (editingArticle ? 'Guardar cambios' : 'Agregar artículo')
            }
          </button>
        </div>
        
        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default ArticleForm; 