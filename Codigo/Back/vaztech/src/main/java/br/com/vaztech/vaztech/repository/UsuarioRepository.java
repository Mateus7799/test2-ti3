package br.com.vaztech.vaztech.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.vaztech.vaztech.entity.Usuario;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, String> {
    Optional<Usuario> findByNome(String nome);

    Optional<Usuario> findByIsAdmin(int isAdmin);
}
