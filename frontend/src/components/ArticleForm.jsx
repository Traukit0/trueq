import React, { useState } from 'react';

const ArticleForm = ({ onAddArticle }) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddArticle(formData);
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
  };

  return (
    <div className="card p-4 mb-4">
      <h2 className="fs-4 mb-3">Agregar nuevo artículo</h2>
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
            placeholder="Ej: Ciudad de México"
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
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Agregar artículo
        </button>
      </form>
    </div>
  );
};

export default ArticleForm; 