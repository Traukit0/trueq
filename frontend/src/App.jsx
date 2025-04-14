import { useState } from 'react'
import Header from './components/Header'
import ArticleForm from './components/ArticleForm'
import ArticleList from './components/ArticleList'
import './App.css'

function App() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: 'Bicicleta de montaña',
      description: 'Bicicleta de montaña en excelente estado, poco uso. Ideal para principiantes o intermedios.',
      imageUrl: '',
      category: 'Deportes',
      location: 'Ciudad de México',
      condition: 'Usado',
      status: 'Disponible',
      value: 50000
    },
    {
      id: 2,
      title: 'Colección de libros de Harry Potter',
      description: 'Colección completa de los 7 libros de Harry Potter en español. Pasta dura, excelente estado.',
      imageUrl: '',
      category: 'Libros',
      location: 'Guadalajara',
      condition: 'Como nuevo',
      status: 'Disponible',
      value: 20000
    },
    {
      id: 3,
      title: 'Clases de guitarra',
      description: 'Ofrezco clases de guitarra para principiantes. 1 hora por semana, virtual o presencial.',
      imageUrl: '',
      category: 'Servicios',
      location: 'Monterrey',
      condition: 'Nuevo',
      status: 'No disponible',
      value: 5000
    }
  ])

  const handleAddArticle = (newArticle) => {
    const processedArticle = {
      ...newArticle,
      value: newArticle.value ? parseInt(newArticle.value, 10) : '',
      id: Date.now()
    }
    setArticles([...articles, processedArticle])
  }

  const handleEditArticle = (editedArticle) => {
    const processedArticle = {
      ...editedArticle,
      value: editedArticle.value ? parseInt(editedArticle.value, 10) : ''
    }
    setArticles(
      articles.map((article) =>
        article.id === processedArticle.id ? processedArticle : article
      )
    )
  }

  const handleDeleteArticle = (id) => {
    setArticles(articles.filter((article) => article.id !== id))
  }

  return (
    <div className="container py-4">
      <Header />
      <div className="row g-4">
        <div className="col-12 col-lg-4">
          <ArticleForm onAddArticle={handleAddArticle} />
        </div>
        <div className="col-12 col-lg-8">
          <ArticleList
            articles={articles}
            onEdit={handleEditArticle}
            onDelete={handleDeleteArticle}
          />
        </div>
      </div>
    </div>
  )
}

export default App
