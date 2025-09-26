package br.com.vaztech.vaztech.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;

@Entity
@Table(name = "Usuario")
@Getter
@Setter
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "cod_funcionario", nullable = false)
    private String cod_funcionario;

    @Column(name = "data_aniversario", nullable = true)
    private LocalDate data_aniversario;

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "senha", nullable = false)
    private String senha;

    @Column(name = "is_admin", nullable = false)
    private int isAdmin;
}
