create database projeto_individual;
use projeto_individual;

create table usuario (
	id			int auto_increment,
    nome	 	varchar(45),
    email		varchar(45),
    senha		varchar(15),
    fav_npc		varchar(10),
    primary key (id)
);

create table forum (
	id			int auto_increment,
    comentario	varchar(1000),
    categoria	varchar(20),
    fkusuario		int,
    primary key (id),
    foreign key (fkusuario) references usuario(id)
);

select * from usuario;