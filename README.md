# TrueQ - Plataforma de Intercambio de Bienes y Servicios

## Descripción del Proyecto

TrueQ es una plataforma social para intercambios desarrollada como Producto Mínimo Viable (PMV) para el ramo "Taller de desarrollo web y móvil" de la carrera Ingeniería en Computación e Informática en UNAB 2025. 

El objetivo principal del proyecto es demostrar capacidades de operaciones CRUD (Create, Read, Update, Delete) a través de una aplicación de estilo red social que permite a los usuarios publicar, consultar, modificar y eliminar artículos para intercambio.

## Stack Tecnológico

El proyecto ha sido desarrollado utilizando las siguientes tecnologías:

### Backend
- **Flask**: Framework web ligero y flexible para Python
- **SQLAlchemy**: ORM (Object-Relational Mapping) para interactuar con la base de datos
- **Alembic**: Herramienta de migración de bases de datos
- **Flask-CORS**: Extensión para manejar Cross-Origin Resource Sharing

### Frontend
- **React**: Biblioteca JavaScript para construir interfaces de usuario
- **Vite**: Herramienta de compilación para desarrollo frontend
- **Bootstrap**: Framework CSS para diseño responsive
- **React Icons**: Paquete de iconos para React

### Base de Datos
- **MySQL**: Sistema de gestión de base de datos relacional
- **Adminer**: Herramienta para administración visual de bases de datos

### Despliegue
- **Docker**: Plataforma de contenedores
- **Docker Compose**: Herramienta para definir y ejecutar aplicaciones Docker multi-contenedor
- **Nginx**: Servidor web para servir la aplicación frontend

## Arquitectura del Sistema

El sistema sigue una arquitectura cliente-servidor con separación clara entre el frontend y el backend:

1. **Frontend (Cliente)**:
   - Aplicación React que proporciona la interfaz de usuario
   - Consume la API REST proporcionada por el backend
   - Permite la interacción del usuario con las operaciones CRUD

2. **Backend (Servidor)**:
   - API RESTful desarrollada con Flask
   - Maneja las operaciones CRUD en la base de datos
   - Proporciona endpoints para cada operación

3. **Base de Datos**:
   - Almacena los datos de los artículos para intercambio
   - Estructura definida mediante modelos SQLAlchemy

## Funcionalidades CRUD Implementadas

TrueQ implementa todas las operaciones CRUD esenciales para demostrar la capacidad de manipulación de datos:

### Create (Crear)
- Formulario para agregar nuevos artículos con información detallada:
  - Título
  - Descripción
  - URL de imagen
  - Categoría
  - Ubicación
  - Estado (disponible/no disponible)
  - Valor aproximado

### Read (Leer)
- Visualización de todos los artículos disponibles en una interfaz de tarjetas
- Vista detallada individual de cada artículo

### Update (Actualizar)
- Capacidad para editar cualquier información de los artículos existentes
- Formulario de edición con los datos pre-cargados

### Delete (Eliminar)
- Función para eliminar artículos existentes
- Confirmación antes de la eliminación para prevenir eliminaciones accidentales

## Estructura del Proyecto

El proyecto está organizado en una estructura clara y modular:

```
TRUEQ/
├── backend/              # Servidor Flask
│   ├── alembic/          # Migraciones de base de datos
│   ├── app/              # Aplicación principal
│   │   ├── models/       # Modelos de datos
│   │   ├── routes/       # Endpoints de la API
│   │   └── services/     # Lógica de negocio
│   └── Dockerfile        # Configuración para contenedor Docker
├── frontend/             # Cliente React
│   ├── src/
│   │   ├── components/   # Componentes React
│   │   ├── App.jsx       # Componente principal
│   │   └── main.jsx      # Punto de entrada
│   └── Dockerfile        # Configuración para contenedor Docker
├── docker-compose.yml    # Configuración de servicios Docker
└── README.md             # Documentación del proyecto
```

## Cómo Ejecutar el Proyecto

### Prerrequisitos
- Docker y Docker Compose instalados
- Git instalado (para clonar el repositorio)

### Pasos para ejecutar
1. Clonar el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd TrueQ
   ```

2. Iniciar los servicios con Docker Compose:
   ```bash
   docker-compose up --build
   ```

3. Acceder a las diferentes interfaces:
   - **Aplicación web**: http://localhost
   - **API backend**: http://localhost/api
   - **Adminer (gestión de base de datos)**: http://localhost:8080
     - Sistema: MySQL
     - Servidor: db
     - Usuario: trueq_user
     - Contraseña: secret123
     - Base de datos: trueq

## Características Implementadas

### Interfaz de Usuario
- Diseño moderno y responsive utilizando Bootstrap
- Navegación intuitiva
- Formularios de entrada con validación
- Indicadores visuales del estado de los artículos

### Gestión de Artículos
- Categorización de artículos (Deportes, Libros, Servicios, etc.)
- Información detallada de cada artículo
- Indicación visual de disponibilidad
- Ubicación del artículo para facilitar intercambios locales

### API Backend
- Endpoints RESTful para todas las operaciones CRUD
- Respuestas JSON estructuradas
- Manejo de errores apropiado
- Documentación de API disponible

## Conclusión

TrueQ demuestra exitosamente la implementación de operaciones CRUD en un entorno web moderno utilizando tecnologías actuales de la industria. El proyecto sigue estándares profesionales de desarrollo y puede servir como base para una aplicación más compleja de intercambio social.

Este PMV cumple con el objetivo de mostrar la capacidad de crear, leer, actualizar y eliminar registros de una base de datos a través de una interfaz web intuitiva y atractiva, demostrando así las habilidades adquiridas en el ramo "Taller de desarrollo web y móvil".

---

## 🧱 Requisitos previos

- Docker y Docker Compose instalados
- Visual Studio Code (opcional, recomendado)
- Cuenta de Docker Hub (opcional)

---

## 📁 Estructura del proyecto

```
TRUEQ/
├── backend/            # API Flask + SQLAlchemy + Alembic
│   ├── app/            # Código fuente backend
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── __init__.py
│   ├── alembic/        # Migraciones de base de datos
│   ├── alembic.ini
│   ├── config.py
│   ├── Dockerfile
│   └── requirements.txt
├── database/           # Datos persistentes de MySQL (volumen)
├── frontend/           # React + Vite (en desarrollo)
├── .env
├── docker-compose.yml
└── README.md
```

---

## 🚀 Pasos para levantar el proyecto desde cero

### 1. Clonar el repositorio

```bash
git clone https://github.com/usuario/trueq.git
cd trueq
```

### 2. Crear archivo `.env`

Crear un archivo `.env` con las siguientes variables:

```ini
DB_HOST=db
DB_PORT=3306
DB_NAME=trueq
DB_USER=trueq_user
DB_PASSWORD=1234
```

### 3. Configurar Docker Compose

El archivo `docker-compose.yml` ya está configurado para levantar:
- backend Flask (`http://localhost:5000`)
- base de datos MySQL 8 (`localhost:3306`)
- Adminer (`http://localhost:8080`)

**Importante**: el volumen `db_data` asegura que los datos de la base de datos persisten incluso al usar `docker-compose down -v`.

### 4. Construir y levantar los contenedores

```bash
docker-compose up --build
```

O si se quiere limpiar el entorno antes:

```bash
docker-compose down -v
alembic downgrade base  # opcional si hubo errores
rm -rf backend/alembic/versions/*
docker-compose build --no-cache
```

### 5. Inicializar Alembic

Entrar al contenedor:
```bash
docker compose exec backend bash
```

Inicializar Alembic:
```bash
alembic init alembic
```

Editar `alembic/env.py` para agregar:
```python
from app import db
from app.models.item import Item

target_metadata = db.metadata
```

Editar `alembic.ini` para usar el entorno:
```ini
sqlalchemy.url = env
```

### 6. Generar y aplicar migraciones

Generar migración:
```bash
alembic revision --autogenerate -m "create items table"
```

Aplicar migración:
```bash
alembic upgrade head
```

### 7. Probar el backend

Acceder a:
```bash
http://localhost:5000/api/items/
```
Debe devolver:
```json
{"message": "¡TrueQ API funcionando!"}
```

---

## 🧪 Pruebas en Postman

### Colección
Una colección `TrueQ.postman_collection.json` fue generada para facilitar las pruebas.
Importar en Postman y usar los siguientes endpoints:

- **GET** `/api/items/` → Listar ítems
- **POST** `/api/items/` → Crear ítem
- **GET** `/api/items/<id>` → Obtener ítem por ID
- **PUT** `/api/items/<id>` → Actualizar ítem
- **DELETE** `/api/items/<id>` → Eliminar ítem

Ejemplo de `POST` (JSON):
```json
{
  "title": "Bicicleta montaña",
  "description": "Bicicleta rodada 29 en excelente estado",
  "category": "deportes",
  "location": "Puerto Varas",
  "condition": "como nuevo",
  "image_url": "https://example.com/bicicleta.jpg",
  "is_available": true
}
```

---

## 🔧 Errores comunes y soluciones

- **ImportError: cannot import name `get_all_items`**
  → Verifica que `app/services/item_service.py` tenga bien definidos y exportados los métodos: `get_all_items`, `create_item`, etc.

- **Alembic: env.py no encuentra MetaData**
  → Asegúrate de importar `from app import db` y definir `target_metadata = db.metadata`

- **Volumen de base de datos se borra con `down -v`**
  → Ya resuelto. Se usa `db_data` como volumen persistente.

---

## 🧩 Próximos pasos

- Implementar frontend con Vite + React
- Autenticación de usuarios
- Subida de imágenes con almacenamiento local o externo
- Filtro de ítems por categoría o localización

---

## 🧑‍💻 Autores

- Manuel Cano - [@traukit0](https://github.com/traukit0)

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Consulta `LICENSE` para más información.

