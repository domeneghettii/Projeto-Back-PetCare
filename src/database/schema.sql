CREATE DATABASE pet_care;

\c pet_care;

CREATE TABLE tutores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL
);

CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    especie VARCHAR(50),
    raca VARCHAR(50),
    idade INT,
    observacoes TEXT,
    foto VARCHAR(255),
    tutor_id INT REFERENCES tutores(id) ON DELETE CASCADE
);

INSERT INTO tutores (nome, telefone) VALUES
('Maria Silva', '11988887777'),
('João Souza', '11977776666'),
('Ana Oliveira', '11966665555'),
('Carlos Pereira', '11955554444'),
('Fernanda Lima', '11944443333'),
('Pedro Santos', '11933332222'),
('Juliana Costa', '11922221111'),
('Ricardo Almeida', '11911110000'),
('Paula Ferreira', '11899998888'),
('Bruno Rocha', '11888887777'),
('Camila Mendes', '11877776666'),
('Rodrigo Martins', '11866665555'),
('Beatriz Ramos', '11855554444'),
('Felipe Nogueira', '11844443333'),
('Larissa Carvalho', '11833332222');


INSERT INTO pets (nome, especie, raca, idade, observacoes, tutor_id, foto) VALUES
('Rex', 'Cachorro', 'Labrador', 5, 'Muito brincalhão', 1, '1758638125242-rexlabrador.jpg'),
('Mia', 'Gato', 'Siamês', 3, 'Gosta de dormir no sofá', 2, '1758638644855-gatosiames.jpg'),
('Thor', 'Cachorro', 'Bulldog', 2, 'Alergia a frango', 3, '1758638739221-bulldog.jpg'),
('Luna', 'Gato', 'Persa', 4, 'Precisa de cuidados com os pelos', 4, '1758638850702-GatoPersa.jpg'),
('Bobby', 'Cachorro', 'Poodle', 6, 'Adora passear no parque', 5, '1758638938299-Poodle.jpg'),
('Mel', 'Gato', 'Vira-lata', 1, 'Muito curiosa e agitada', 6, '1759778947704-gatoviralata.jpg'),
('Zeus', 'Cachorro', 'Pastor Alemão', 7, 'Protetor da casa', 7, '1759779070022-pastoralemao.jpg'),
('Nina', 'Gato', 'Angorá', 2, 'Olhos azuis intensos', 8, '1759779176095-angora.jpg'),
('Spike', 'Cachorro', 'Pitbull', 4, 'Precisa de socialização', 9, '1759779264018-pitbull.jpg'),
('Amora', 'Gato', 'Maine Coon', 3, 'Muito dócil e calma', 10, '1759779427297-gatomaine.jpg'),
('Max', 'Cachorro', 'Golden Retriever', 5, 'Adora água', 11, '1759779875032-goldenretriever.jpg'),
('Jade', 'Gato', 'Bengal', 2, 'Cheia de energia', 12, '1759780004185-gatobengal.jpg'),
('Apolo', 'Cachorro', 'Beagle', 3, 'Farejador nato', 13, '1759780124954-cachorrobeagle.jpg'),
('Sushi', 'Gato', 'Oriental', 1, 'Muito esperto', 14, '1759780222374-gatooriental.jpg'),
('Loki', 'Cachorro', 'Husky Siberiano', 4, 'Uiva bastante à noite', 15, '1759780353258-husky.jpg');
