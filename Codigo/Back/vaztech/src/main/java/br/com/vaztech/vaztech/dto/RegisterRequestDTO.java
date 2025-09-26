package br.com.vaztech.vaztech.dto;

public record RegisterRequestDTO (String nome, String cod_funcionario, String status, String senha, int isAdmin) {
}
