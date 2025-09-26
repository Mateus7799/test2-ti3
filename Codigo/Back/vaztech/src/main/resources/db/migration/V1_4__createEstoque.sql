CREATE TABLE Estoque (
    id INT IDENTITY(1,1) PRIMARY KEY ,
    numero_de_serie VARCHAR(100) UNIQUE NOT NULL,
    modelo VARCHAR(100),
    produto VARCHAR(100) NOT NULL,
    custo DECIMAL(10,2) NOT NULL,
    descricao VARCHAR(255),
    fornecedor_id INT,
    data_entrada DATETIME2 DEFAULT GETDATE(),
    observacoes VARCHAR(255),
    status VARCHAR(50) NOT NULL,
    cor VARCHAR(25),
    FOREIGN KEY (fornecedor_id) REFERENCES Pessoa (id)
);

CREATE TABLE ESTOQUE (
     numero_de_serie VARCHAR(100) PRIMARY KEY,
     modelo VARCHAR(100) NOT NULL,
     produto VARCHAR(100) NOT NULL,
     custo DECIMAL(10,2) NOT NULL,
     descricao VARCHAR(255) NULL,
     fornecedor INT NULL,
    -- O tipo TIMESTAMP foi convertido para DATETIME2, com GETDATE() para registrar a data/hora atual por padrão
     data_entrada DATETIME2 NOT NULL DEFAULT GETDATE(),
     observacoes VARCHAR(255) NULL,
    -- O tipo ENUM foi substituído por VARCHAR com uma restrição CHECK
     status VARCHAR(10) NULL CHECK (status IN ('EM ESTOQUE', 'ATENÇÃO', 'VENDIDO')),
     cor VARCHAR(50) NULL,
     CONSTRAINT FK_Estoque_Fornecedor FOREIGN KEY (fornecedor) REFERENCES Pessoa (id)
);

-- Criação de um índice na coluna de fornecedor para otimizar buscas
CREATE INDEX IDX_Estoque_Fornecedor ON ESTOQUE (fornecedor);