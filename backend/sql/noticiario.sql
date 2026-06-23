DROP DATABASE IF EXISTS noticiario;
CREATE DATABASE IF NOT EXISTS noticiario;
USE noticiario;
CREATE TABLE noticias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(250) NOT NULL,
    conteudo TEXT NOT NULL,
    caminho_imagem VARCHAR(250),
    link VARCHAR(250)
);

INSERT INTO noticias (
    titulo,
    conteudo,
    caminho_imagem, 
    link
) VALUES (
    'Estratégias em um Novo Paradigma Globalizado no mundo todo',
    'Ainda assim, existem dúvidas a respeito de como o início da atividade geral de formação de atitudes maximiza as possibilidades por conta da gestão inovadora da qual fazemos parte. As experiências acumuladas demonstram que a percepção das dificuldades acarreta um processo de reformulação e modernização das regras de conduta normativas. Por outro lado, a determinação clara de objetivos eleva o grau de responsabilidade compartilhada dos relacionamentos verticais entre as hierarquias. Do ponto de vista estrutural, a hegemonia do ambiente político estende o alcance e a importância do orçamento setorial. Do mesmo modo, a reestruturação das práticas organizacionais revela a importância de abordagens integradas dos procedimentos normalmente adotados.',
    '../img/noticiasglobo.png',
    'https://guthib.com/'
);