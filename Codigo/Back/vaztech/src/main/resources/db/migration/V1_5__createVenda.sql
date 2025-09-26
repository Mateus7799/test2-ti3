CREATE TABLE VENDAS (
    id INT IDENTITY(1,1) PRIMARY KEY,
    produto_estoque VARCHAR(100) NOT NULL,
    preco_de_venda DECIMAL(10,2) NOT NULL,
    cliente INT NOT NULL,
    funcionario INT NULL,
    CONSTRAINT FK_Venda_Estoque FOREIGN KEY (produto_estoque) REFERENCES Estoque (numero_de_serie),
    CONSTRAINT FK_Venda_Cliente FOREIGN KEY (cliente) REFERENCES Pessoa (id),
    CONSTRAINT FK_Venda_Funcionario FOREIGN KEY (funcionario) REFERENCES Usuario (id)
);

-- Criação de índices nas chaves estrangeiras da tabela de Vendas para otimizar joins e buscas
CREATE INDEX IDX_Venda_Estoque ON VENDAS (produto_estoque);
CREATE INDEX IDX_Venda_Cliente ON VENDAS (cliente);
CREATE INDEX IDX_Venda_Funcionario ON VENDAS (funcionario);