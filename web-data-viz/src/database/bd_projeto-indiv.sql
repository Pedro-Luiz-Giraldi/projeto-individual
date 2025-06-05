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

INSERT INTO usuario (nome, email, senha, fav_npc) VALUES	
	('GiantDad', 'giantdad@gmail.com', 'giantdad', 'Siegmeyer'),
	('Oscar', 'oscar@gmail.com', 'oscar', 'Solaire'),
	('João', 'joao@gmail.com', 'joao', 'Laurentius'),
	('Roberto', 'roberto@gmail.com', 'roberto', 'Patches'),
	('André', 'andre@gmail.com', 'andre', 'Andre');

INSERT INTO forum () VALUES
	('Giant Dad', 'Armas: Chaos Zweihander +5, Pyromancy Flame\n\n\nArmadura: Mask of the Father (drop do Pinwheel ou vendida pelo Patches) \n                  Giant Armor\n\n\nAnéis: Havels Ring, FaP (Favor and Protection)\n\n\nMagias: 2x Black Flame\n\n\nSl: 99\nVit: 48\nAtt: 12\nEnd: 66\nStr: 16\nDex: 10', 'builds', '1'),
    ('No Soul', 'Regras da run:\n  - Não upar de nível\n  - Não comprar itens\n  - Não melhorar equipamento\n  - Usar apenas itens encontrados pelo mundo\n\n\nBoa sorte.', 'challangeruns', '1'),
    ('Ooh Shiny!', 'Regras da run:\n  - Commeçar com a classe Deprived\n  - Deve usar/equipar todo item assim que o ver\n  - Equipar armas na mão direita e escudos na mão esquerda', 'challangeruns', '1'),
    ('Marvelous Chester', 'De alguma forma, o npc Marvelous Chester encontrado na dlc Artorias of  The Abyss, veio do universo de Bloodborne.\nEssa afirmação é baseada na semelhança do design do seu personagem com o estilo de arte do jogo, além de que durante o desenvolvimento da dlc, Miyazaki provavelmente já possuia ideias para a criação de Bloodborne. ', 'historia', '2'),
    ('Dark Lord', 'Crown of the Great Lord\nBlack Knight Armor\nShadow Gauntlets\nWaistcloth of the Channelers', 'fashion', '2');

select * from usuario;
select * from forum;

SELECT f.titulo, f.comentario, f.categoria, u.nome
            FROM forum f
            JOIN usuario u
            WHERE f.fkusuario = u.id;

SELECT fav_npc FROM usuario;

SELECT categoria, count(categoria) qtd
        FROM forum
        GROUP BY categoria;