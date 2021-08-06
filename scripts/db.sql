CREATE DATABASE IF NOT EXISTS tasksDB

USE tasksDB;

CREATE TABLE IF NOT EXISTS tasks (
    id int(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    PRIMARY KEY (id)
);

insert into tasks (title, description) values
    ('Ir al baño', 'Debode ir al baño todos los dias'),
    ('Comer', 'debo de comer todos los dias de mi vida'),
    ('Futbol', 'Debo de jugar futbol todos los dias de mi vida'),
    ('Programacion', 'Debo de aprender a programar para darme la vida que me merezco');


