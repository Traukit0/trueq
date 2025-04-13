FROM python:3.11-slim

# Establece directorio de trabajo
WORKDIR /app

# Copia archivos necesarios
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia el código del backend
COPY . .

# Expone el puerto Flask
EXPOSE 5000

# Comando de ejecución
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
