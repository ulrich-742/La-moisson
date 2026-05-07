DROP DATABASE IF EXISTS la_moisson;
CREATE DATABASE la_moisson;
USE la_moisson;

CREATE TABLE cultures (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(50) NOT NULL
);

CREATE TABLE utilisateurs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  role VARCHAR(50) NOT NULL
);

CREATE TABLE parcelles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  culture_id INT,
  surface DECIMAL(5,2) NOT NULL,
  etat ENUM('En croissance', 'Semée', 'Au repos', 'Récoltée') NOT NULL,
  derniere_maj DATE,
  FOREIGN KEY (culture_id) REFERENCES cultures(id)
  ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE recoltes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  date_recolte DATE NOT NULL,
  parcelle_id INT,
  culture_id INT,
  quantite DECIMAL(6,2),
  rendement DECIMAL(5,2),
  FOREIGN KEY (parcelle_id) REFERENCES parcelles(id)
  ON DELETE RESTRICT ON UPDATE CASCADE,
  FOREIGN KEY (culture_id) REFERENCES cultures(id)
  ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE cours_grains (
  id INT AUTO_INCREMENT PRIMARY KEY,
  date_cours DATE NOT NULL,
  culture_id INT,
  prix DECIMAL(6,2),
  evolution DECIMAL(4,2),
  FOREIGN KEY (culture_id) REFERENCES cultures(id)
  ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE meteo (
  id INT AUTO_INCREMENT PRIMARY KEY,
  date_releve DATE NOT NULL,
  temperature DECIMAL(4,1),
  pluie DECIMAL(5,1),
  humidite INT,
  vent DECIMAL(5,1),
  pression INT,
  condition_meteo VARCHAR(50)
);

CREATE TABLE previsions_meteo (
  id INT AUTO_INCREMENT PRIMARY KEY,
  date_prevision DATE NOT NULL,
  jour VARCHAR(10),
  temp_max DECIMAL(4,1),
  temp_min DECIMAL(4,1),
  pluie DECIMAL(5,1),
  vent DECIMAL(5,1),
  humidite INT,
  condition_meteo VARCHAR(50)
);

CREATE TABLE calculs_rendement (
  id INT AUTO_INCREMENT PRIMARY KEY,
  date_calcul DATE NOT NULL,
  parcelle_id INT,
  culture_id INT,
  surface DECIMAL(5,2),
  condition_meteo VARCHAR(50),
  temperature DECIMAL(4,1),
  pluviometrie DECIMAL(5,1),
  humidite INT,
  vent DECIMAL(5,1),
  etat_parcelle VARCHAR(50),
  facteur_meteo DECIMAL(4,2),
  rendement_estime_t DECIMAL(6,2),
  rendement_estime_tha DECIMAL(5,2),
  appreciation VARCHAR(100),
  FOREIGN KEY (parcelle_id) REFERENCES parcelles(id)
  ON DELETE RESTRICT ON UPDATE CASCADE,
  FOREIGN KEY (culture_id) REFERENCES cultures(id)
  ON DELETE RESTRICT ON UPDATE CASCADE
);

INSERT INTO cultures (nom) VALUES ('Blé'), ('Maïs'), ('Orge'), ('Avoine');

INSERT INTO utilisateurs (nom, role) VALUES ('Intendant', 'Intendant');

INSERT INTO parcelles (nom, culture_id, surface, etat, derniere_maj) VALUES
('Champ du Nord', 1, 5.2, 'En croissance', '1600-05-12'),
('Les Hauts', 3, 3.8, 'En croissance', '1600-05-10'),
('Le Colombier', 4, 2.8, 'Semée', '1600-05-08'),
('La Petite Plaine', 2, 4.1, 'En croissance', '1600-05-11'),
('Champ du Sud', 1, 6.0, 'Au repos', '1600-05-05'),
('Les Vallons', 3, 3.5, 'Semée', '1600-05-09');

INSERT INTO recoltes (date_recolte, parcelle_id, culture_id, quantite, rendement) VALUES
('1600-05-05', 1, 1, 24.3, 5.52),
('1600-04-28', 2, 3, 18.7, 4.92),
('1600-04-20', 3, 4, 15.2, 5.43),
('1600-04-12', 4, 2, 32.1, 5.80),
('1600-04-01', 5, 1, 22.8, 5.00),
('1600-03-25', 6, 3, 16.0, 4.57);

INSERT INTO cours_grains (date_cours, culture_id, prix, evolution) VALUES
('1600-05-05', 1, 210, 2.3),
('1600-05-05', 2, 185, -1.2),
('1600-05-05', 3, 195, 1.1),
('1600-05-05', 4, 170, -0.5);

INSERT INTO meteo (date_releve, temperature, pluie, humidite, vent, pression, condition_meteo) VALUES
('1600-05-05', 22.0, 12.0, 65, 18.0, 1015, 'Partiellement nuageux');

INSERT INTO previsions_meteo (date_prevision, jour, temp_max, temp_min, pluie, vent, humidite, condition_meteo) VALUES
('1600-05-06', 'MAR', 22.0, 12.0, 0, 15.0, 60, 'Ensoleillé'),
('1600-05-07', 'MER', 18.0, 10.0, 5.0, 20.0, 70, 'Nuageux'),
('1600-05-08', 'JEU', 17.0, 9.0, 8.0, 18.0, 75, 'Pluvieux'),
('1600-05-09', 'VEN', 20.0, 11.0, 0, 0, 55, 'Ensoleillé'),
('1600-05-10', 'SAM', 23.0, 13.0, 3.0, 14.0, 60, 'Partiellement nuageux'),
('1600-05-11', 'DIM', 19.0, 11.0, 14.0, 14.0, 50, 'Pluvieux'),
('1600-05-12', 'LUN', 16.0, 8.0, 0, 10.0, 50, 'Ensoleillé');