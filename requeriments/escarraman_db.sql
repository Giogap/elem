CREATE DATABASE escarraman_db;

USE escarraman_db;

CREATE TABLE bandas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  biografia TEXT,
  genero VARCHAR(50),
  pais VARCHAR(50)
);

CREATE TABLE multimedia (
  id INT PRIMARY KEY AUTO_INCREMENT,
  banda_id INT,
  enlace VARCHAR(200),
  FOREIGN KEY (banda_id) REFERENCES bandas(id) ON DELETE CASCADE
);

CREATE TABLE productos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  banda_id INT,
  nombre VARCHAR(100),
  precio DECIMAL(10, 2),
  FOREIGN KEY (banda_id) REFERENCES bandas(id) ON DELETE CASCADE
);

ALTER TABLE productos ADD imagen LONGBLOB;

ALTER TABLE productos CHANGE nombre nombre_pro VARCHAR(100);

ALTER TABLE bandas ADD imagen LONGBLOB;
