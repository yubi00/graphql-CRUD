/* create db users */
CREATE DATABASE users;

/* create table user */

CREATE TABLE persons (
    id VARCHAR(50) NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL 
);

/* Inser Records */
INSERT INTO persons (name, email)
VALUES ('Yubi', 'yubikhadka@gmail.com');
INSERT INTO persons (name, email)
VALUES ('Buchu', 'buchubasnet@gmail.com');