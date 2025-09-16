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

INSERT INTO pets (nome, especie, raca, idade, observacoes, tutor_id) VALUES
('Rex', 'Cachorro', 'Labrador', 5, 'Muito brincalhão', 1),
('Mia', 'Gato', 'Siamês', 3, 'Gosta de dormir no sofá', 2),
('Thor', 'Cachorro', 'Bulldog', 2, 'Alergia a frango', 3),
('Luna', 'Gato', 'Persa', 4, 'Precisa de cuidados com os pelos', 4),
('Bobby', 'Cachorro', 'Poodle', 6, 'Adora passear no parque', 5),
('Mel', 'Gato', 'Vira-lata', 1, 'Muito curiosa e agitada', 6),
('Zeus', 'Cachorro', 'Pastor Alemão', 7, 'Protetor da casa', 7),
('Nina', 'Gato', 'Angorá', 2, 'Olhos azuis intensos', 8),
('Spike', 'Cachorro', 'Pitbull', 4, 'Precisa de socialização', 9),
('Amora', 'Gato', 'Maine Coon', 3, 'Muito dócil e calma', 10),
('Max', 'Cachorro', 'Golden Retriever', 5, 'Adora água', 11),
('Jade', 'Gato', 'Bengal', 2, 'Cheia de energia', 12),
('Apolo', 'Cachorro', 'Beagle', 3, 'Farejador nato', 13),
('Sushi', 'Gato', 'Oriental', 1, 'Muito esperto', 14),
('Loki', 'Cachorro', 'Husky Siberiano', 4, 'Uiva bastante à noite', 15);
