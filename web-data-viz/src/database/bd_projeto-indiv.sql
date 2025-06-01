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
    titulo		varchar(50),
    comentario	varchar(1000),
    categoria	varchar(20),
    fkusuario		int,
    primary key (id),
    foreign key (fkusuario) references usuario(id)
);

select * from usuario;
select * from forum;

select f.titulo, f.comentario, f.categoria, u.nome
from forum f
join usuario u 
where f.fkusuario = u.id;

select categoria, count(categoria) qtd
from forum
group by categoria;

-- truncate table forum;
-- truncate table usuario;