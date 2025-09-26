CREATE TABLE PESSOAS (
    id INT  IDENTITY(1,1) PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    cpf_cnpj VARCHAR(20) UNIQUE NOT NULL,
    data_aniversario DATE,
    origem_cliente VARCHAR(100)
);

