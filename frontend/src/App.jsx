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
      location: 'Ancud',
      status: 'Disponible',
      value: '$5.0k'
    },
    {
      id: 2,
      title: 'Colección de libros de Harry Potter',
      description: 'Colección completa de los 7 libros de Harry Potter en español. Pasta dura, excelente estado.',
      imageUrl: '',
      category: 'Libros',
      location: 'Quellón',
      status: 'Disponible',
      value: '$2.0k'
    },
    {
      id: 3,
      title: 'Clases de guitarra',
      description: 'Ofrezco clases de guitarra para principiantes. 1 hora por semana, virtual o presencial.',
      imageUrl: '',
      category: 'Servicios',
      location: 'Castro',
      status: 'No disponible',
      value: '$500'
    }
  ])

  const handleAddArticle = (newArticle) => {
    const articleWithId = {
      ...newArticle,
      id: Date.now()
    }
    setArticles([...articles, articleWithId])
  }

  const handleEditArticle = (editedArticle) => {
    setArticles(
      articles.map((article) =>
        article.id === editedArticle.id ? editedArticle : article
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
