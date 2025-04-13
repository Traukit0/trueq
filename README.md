# TrueQ - Plataforma de Intercambio

Este README detalla paso a paso cómo poner en marcha el entorno de desarrollo del proyecto **TrueQ**, una red social para intercambios desarrollada con Flask, SQLAlchemy, Alembic, React (Vite) y MySQL, desplegada mediante Docker Compose.

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

