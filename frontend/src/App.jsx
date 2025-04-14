import { useState, useEffect } from 'react'
import Header from './components/Header'
import ArticleForm from './components/ArticleForm'
import ArticleList from './components/ArticleList'
import { getArticles, updateArticle, deleteArticle } from './services/api'
import './App.css'

function App() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Cargar artículos al montar el componente
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true)
        console.log('Solicitando artículos a la API...')
        const data = await getArticles()
        console.log('Artículos recibidos:', data)
        setArticles(data)
        setError(null)
      } catch (error) {
        console.error('Error detallado al cargar artículos:', error)
        setError(`Error al cargar los artículos: ${error.message}`)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  const handleAddArticle = (newArticle) => {
    // El artículo ya ha sido creado en la API por el formulario
    // Solo necesitamos actualizar el estado local
    setArticles([...articles, newArticle])
  }

  const handleEditArticle = async (editedArticle) => {
    try {
      // Actualizar en la API
      const updated = await updateArticle(editedArticle.id, editedArticle)
      
      // Actualizar estado local
      setArticles(
        articles.map((article) =>
          article.id === updated.id ? updated : article
        )
      )
    } catch (error) {
      console.error('Error updating article:', error)
      alert('Error al actualizar el artículo. Por favor, inténtalo de nuevo.')
    }
  }

  const handleDeleteArticle = async (id) => {
    try {
      // Eliminar de la API
      await deleteArticle(id)
      
      // Actualizar estado local
      setArticles(articles.filter((article) => article.id !== id))
    } catch (error) {
      console.error('Error deleting article:', error)
      alert('Error al eliminar el artículo. Por favor, inténtalo de nuevo.')
    }
  }

  return (
    <div className="container py-4">
      <Header />
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <div className="row g-4">
        <div className="col-12 col-lg-4">
          <ArticleForm onAddArticle={handleAddArticle} />
        </div>
        <div className="col-12 col-lg-8">
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
              onEdit={handleEditArticle}
              onDelete={handleDeleteArticle}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
