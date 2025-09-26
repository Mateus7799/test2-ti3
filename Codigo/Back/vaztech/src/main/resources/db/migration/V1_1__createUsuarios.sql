CREATE TABLE Usuario (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    cod_funcionario INT UNIQUE,
    data_aniversario DATE,
    status VARCHAR(15) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    is_admin BIT DEFAULT 0 NOT NULL
);