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

select * from usuario;