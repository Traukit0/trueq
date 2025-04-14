// API Service para comunicación con el backend

const API_URL = 'http://localhost:5000/api';

/**
 * Obtiene todos los artículos
 * @returns {Promise<Array>} Lista de artículos
 */
export const getArticles = async () => {
  try {
    const response = await fetch(`${API_URL}/items/`);
    if (!response.ok) {
      throw new Error('Error al obtener artículos');
    }
    const data = await response.json();
    
    console.log('Datos crudos del backend:', JSON.stringify(data, null, 2));
    
    // Transformar datos del backend al formato esperado por el frontend
    const transformedData = data.map(item => {
      // Depurar explícitamente el valor para ver qué está llegando
      console.log(`Item ${item.id} - ${item.title}:`);
      console.log('  valor:', item.valor, typeof item.valor);
      
      return {
        id: item.id,
        title: item.title,
        description: item.description,
        imageUrl: item.image_url || '',
        category: item.category || '',
        location: item.location || '',
        condition: item.condition || '',
        status: item.is_available ? 'Disponible' : 'No disponible',
        value: typeof item.valor === 'number' ? item.valor : null
      };
    });
    
    console.log('Datos transformados:', transformedData);
    return transformedData;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

/**
 * Obtiene un artículo por su ID
 * @param {number} id - ID del artículo
 * @returns {Promise<Object>} Artículo
 */
export const getArticleById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/items/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener el artículo');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching article ${id}:`, error);
    throw error;
  }
};

/**
 * Crea un nuevo artículo
 * @param {Object} articleData - Datos del artículo
 * @returns {Promise<Object>} Artículo creado
 */
export const createArticle = async (articleData) => {
  try {
    console.log('Sending article data:', articleData);
    
    // Intentemos con solo campos obligatorios primero
    const mappedData = {
      title: articleData.title,
      description: articleData.description,
      category: articleData.category ? articleData.category.toLowerCase() : '',
      condition: articleData.condition ? articleData.condition.toLowerCase() : '',
      location: articleData.location
    };
    
    // Manejo específico para el valor
    if (articleData.value !== undefined && articleData.value !== '' && articleData.value !== null) {
      // Convertir a número
      const parsedValue = parseInt(articleData.value, 10);
      if (!isNaN(parsedValue)) {
        mappedData.valor = parsedValue;
        console.log('Valor a enviar:', parsedValue, typeof parsedValue);
      }
    } else {
      // Si no hay valor, enviamos explícitamente null para evitar valores por defecto
      mappedData.valor = null;
      console.log('Enviando valor como null explícitamente');
    }
    
    // Agregar URL de imagen si existe
    if (articleData.imageUrl) {
      mappedData.image_url = articleData.imageUrl;
    }
    
    // Agregar disponibilidad
    mappedData.is_available = articleData.status === 'Disponible';

    console.log('Mapped data to send:', mappedData);

    const response = await fetch(`${API_URL}/items/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mappedData),
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error('Error response:', errorData);
      throw new Error(`Error al crear el artículo: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error creating article:', error);
    throw error;
  }
};

/**
 * Actualiza un artículo existente
 * @param {number} id - ID del artículo
 * @param {Object} articleData - Datos actualizados del artículo
 * @returns {Promise<Object>} Artículo actualizado
 */
export const updateArticle = async (id, articleData) => {
  try {
    console.log('Updating article data:', articleData);
    
    // Intentemos con solo campos obligatorios primero
    const mappedData = {
      title: articleData.title,
      description: articleData.description,
      category: articleData.category ? articleData.category.toLowerCase() : '',
      condition: articleData.condition ? articleData.condition.toLowerCase() : '',
      location: articleData.location
    };
    
    // Manejo específico para el valor
    if (articleData.value !== undefined && articleData.value !== '' && articleData.value !== null) {
      // Convertir a número
      const parsedValue = parseInt(articleData.value, 10);
      if (!isNaN(parsedValue)) {
        mappedData.valor = parsedValue;
        console.log('Valor a enviar en update:', parsedValue, typeof parsedValue);
      }
    } else {
      // Si no hay valor, enviamos explícitamente null para evitar valores por defecto
      mappedData.valor = null;
      console.log('Enviando valor como null explícitamente en update');
    }
    
    // Agregar URL de imagen si existe
    if (articleData.imageUrl) {
      mappedData.image_url = articleData.imageUrl;
    }
    
    // Agregar disponibilidad
    mappedData.is_available = articleData.status === 'Disponible';

    console.log('Mapped data to send:', mappedData);

    const response = await fetch(`${API_URL}/items/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mappedData),
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error('Error response:', errorData);
      throw new Error(`Error al actualizar el artículo: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error updating article ${id}:`, error);
    throw error;
  }
};

/**
 * Elimina un artículo
 * @param {number} id - ID del artículo a eliminar
 * @returns {Promise<Object>} Mensaje de confirmación
 */
export const deleteArticle = async (id) => {
  try {
    const response = await fetch(`${API_URL}/items/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Error al eliminar el artículo');
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error deleting article ${id}:`, error);
    throw error;
  }
}; 