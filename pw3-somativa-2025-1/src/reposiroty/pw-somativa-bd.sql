CREATE DATABASE bd_libri_api;
USE bd_libri_api;

insert into tbl_categoria (nome_categoria, createdAt, updatedAt) value ('TESTE CATEGORIA 2', NOW(), NOW());

INSERT INTO tbl_categoria (nome_categoria, createdAt, updatedAt) VALUES ('Ficção Científica', now(), now());
INSERT INTO tbl_categoria (nome_categoria, createdAt, updatedAt) VALUES ('Fantasia Heroica', now(), now());
INSERT INTO tbl_categoria (nome_categoria, createdAt, updatedAt) VALUES ('Romance', now(), now());
INSERT INTO tbl_categoria (nome_categoria, createdAt, updatedAt) VALUES ('Distopia', now(), now());
INSERT INTO tbl_categoria (nome_categoria, createdAt, updatedAt) VALUES ('Infantil', now(), now());

SELECT * FROM tbl_categoria;
SELECT * FROM tbl_livros;