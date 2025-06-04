create database projeto_individual;
use projeto_individual;

create table usuario (
	id			int auto_increment,
    nome	 	varchar(45),
    email		varchar(45),
    senha		varchar(20),
    fav_npc		varchar(10),
    primary key (id)
);

create table forum (
	id			int auto_increment,
    titulo		varchar(50),
    comentario	varchar(1000),
    categoria	varchar(20),
    fkusuario		int,
    primary key (id),
    foreign key (fkusuario) references usuario(id)
);

select * from usuario;
select * from forum;

SELECT f.titulo, f.comentario, f.categoria, u.nome
            FROM forum f
            JOIN usuario u
            WHERE f.fkusuario = u.id;

    
-- drop table forum;
-- truncate table forum;
-- truncate table usuario;