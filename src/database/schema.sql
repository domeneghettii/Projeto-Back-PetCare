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
('Rex', 'Cachorro', 'Labrador', 5, 'Muito brincalhão', 1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/640px-YellowLabradorLooking_new.jpg'),
('Mia', 'Gato', 'Siamês', 3, 'Gosta de dormir no sofá', 2, 'https://www.whiskas.com.br/sites/g/files/fnmzdf2156/files/2024-10/gato-siames.jpg'),
('Thor', 'Cachorro', 'Bulldog', 2, 'Alergia a frango', 3, 'https://media-eu.husse.com/media/72/51/36/1607076929/iStock-1018276002.jpg'),
('Luna', 'Gato', 'Persa', 4, 'Precisa de cuidados com os pelos', 4, 'https://www.correiobraziliense.com.br/aqui/wp-content/uploads/2025/06/gato_persa.jpg'),
('Bobby', 'Cachorro', 'Poodle', 6, 'Adora passear no parque', 5, 'https://t3.ftcdn.net/jpg/02/79/79/46/360_F_279794635_jbbSHLlc5GvQNdw5oqpxhxxyek3jUo64.jpg'),
('Mel', 'Gato', 'Vira-lata', 1, 'Muito curiosa e agitada', 6, 'https://www.patasdacasa.com.br/sites/default/files/styles/article_detail_desktop/public/inline-images/quais-tipos-gatos-vira-lata-mais-populares-brasil3.jpg.webp?itok=QFcjMXLS'),
('Zeus', 'Cachorro', 'Pastor Alemão', 7, 'Protetor da casa', 7, 'https://vetex.vet.br/blog/wp-content/uploads/2021/07/Pastor-alemao-tudo-sobre-a-raca-do-cao-policial-930x620.png'),
('Nina', 'Gato', 'Angorá', 2, 'Olhos azuis intensos', 8, 'https://cobasi.vteximg.com.br/arquivos/ids/278731/angor%C3%A1_.png?v=637052081114200000'),
('Spike', 'Cachorro', 'Pitbull', 4, 'Precisa de socialização', 9, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSaXEGvnncbp7Ja15_JRGz_xKjGlI0MGTLUKAVMxbqHoJEjdcRKK2Hi6344Fs9-4wIDAw&usqp=CAU'),
('Amora', 'Gato', 'Maine Coon', 3, 'Muito dócil e calma', 10, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZrM79_oNFjaRh2WhO4iRXpKcJoOH0IzDAw&s'),
('Max', 'Cachorro', 'Golden Retriever', 5, 'Adora água', 11, 'https://www.dogvibe.com.br/wp-content/uploads/2023/06/guia_racas_golden_retriever_dogvibe.jpg'),
('Jade', 'Gato', 'Bengal', 2, 'Cheia de energia', 12, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpfDAWPG7TgrGQZt5kKQpQ_cD18ILaF4XXiQ&s'),
('Apolo', 'Cachorro', 'Beagle', 3, 'Farejador nato', 13, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAZrTtw4zIH3M36-sd7h2d6dqESSdnEhBuUg&s'),
('Sushi', 'Gato', 'Oriental', 1, 'Muito esperto', 14, 'https://tica.org/wp-content/uploads/2018/08/Oriental-Shorthair-Full-Body.jpg'),
('Loki', 'Cachorro', 'Husky Siberiano', 4, 'Uiva bastante à noite', 15, 'https://blog.polipet.com.br/wp-content/uploads/2022/08/AdobeStock_100800827-445x445.jpeg');
