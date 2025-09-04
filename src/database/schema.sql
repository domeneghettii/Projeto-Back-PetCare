CREATE DATABASE pet_care;

\c pet_care;

CREATE TABLE tutors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL
);


CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    species VARCHAR(50),
    breed VARCHAR(50),
    age INT,
    tutor_id INTEGER REFERENCES tutors (id),
    notes TEXT
);

INSERT INTO tutors (name, phone) VALUES
('Luana Domeneghetti', '19993766815'),
('Kevin Eziquiel Lima', '19993766815'),
('Anna Beatriz Leme', '19872418344'),
('Bruno Henrique Costa', '19995342178'),
('Beatriz Lima', '19996726349'),
('Carlos Eduardo Martins', '19985476931'),
('Fernanda Souza', '19995123684'),
('Marcos Vinícius Rocha', '19874569832'),
('Juliana Pereira', '19994637890'),
('Lucas Gabriel Nunes', '19993457821'),
('Patrícia Alves', '19873568942'),
('Rodrigo Santana', '19991234567'),
('Amanda Cristina Lopes', '19994561234'),
('Felipe Augusto Mendes', '19992233445'),
('Sabrina Carvalho', '19876543210'),
('Gabriel Fernandes', '19990011223'),
('Camila Ribeiro', '19991122334'),
('Ricardo Bastos', '19998877665'),
('Natália Teixeira', '19879998877'),
('Thiago Monteiro', '19993334455');



INSERT INTO pets (name, species, breed, age, tutor_id, notes) VALUES
('Thor', 'Cachorro', 'Pastor Alemão', 4, 1, 'Muito ativo, precisa de passeios diários'),
('Luna', 'Gato', 'Siamês', 2, 2, 'Gosta de dormir em lugares altos'),
('Mel', 'Cachorro', 'Shih Tzu', 5, 3, 'Muito dócil e tranquila'),
('Fred', 'Cachorro', 'Labrador', 3, 4, 'Adora água e correr no parque'),
('Nina', 'Gato', 'Persa', 1, 5, 'Tem medo de barulhos altos'),
('Zazu', 'Ave', 'Calopsita', 2, 6, 'Assobia músicas e repete sons'),
('Lelé', 'Roedor', 'Porquinho-da-Índia', 3, 7, 'Gosta de cenoura e contato humano'),
('Spike', 'Cachorro', 'Bulldog', 6, 8, 'Calmo, mas ronca bastante'),
('Lola', 'Gato', 'Maine Coon', 3, 9, 'Muito carinhosa e sociável'),
('Rex', 'Cachorro', 'Doberman', 2, 10, 'Precisa de espaço e atividades físicas'),
('Tico', 'Ave', 'Papagaio', 10, 11, 'Fala algumas palavras e canta'),
('Bidu', 'Cachorro', 'Beagle', 4, 12, 'Farejador nato, gosta de cavar'),
('Coquinho', 'Roedor', 'Hamster', 1, 13, 'Corre muito na rodinha'),
('Simba', 'Gato', 'Bengal', 2, 14, 'Muito ativo e curioso'),
('Pipoca', 'Cachorro', 'Dálmata', 5, 15, 'Gosta de correr e brincar com outros cães'),
('Jade', 'Gato', 'Ragdoll', 1, 16, 'Muito calma, ideal para apartamento'),
('Toby', 'Cachorro', 'Chihuahua', 6, 17, 'Late bastante, mas é protetor'),
('Salem', 'Gato', 'Preto SRD', 4, 18, 'Misterioso e carismático'),
('Fiona', 'Cachorro', 'Buldogue Francês', 3, 19, 'Teimosa, mas muito fofa'),
('Nico', 'Réptil', 'Tartaruga Tigre-água', 7, 20, 'Precisa de sol e água limpa');


