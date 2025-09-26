package br.com.vaztech.vaztech.controller;


import br.com.vaztech.vaztech.dto.LoginRequestDTO;
import br.com.vaztech.vaztech.dto.RegisterRequestDTO;
import br.com.vaztech.vaztech.dto.ResponseDTO;
import br.com.vaztech.vaztech.entity.Usuario;
import br.com.vaztech.vaztech.infra.security.TokenService;
import br.com.vaztech.vaztech.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UsuarioRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequestDTO body){
        Usuario usuario = this.repository.findByIsAdmin(body.isAdmin()).orElseThrow(() -> new RuntimeException("Usuário não encontrado."));
        if(passwordEncoder.matches(body.senha(), usuario.getSenha())) {
            String token = this.tokenService.generateToken(usuario);
            return ResponseEntity.ok(new ResponseDTO(usuario.getNome(), token));
        }
        return ResponseEntity.badRequest().build();
    }


    @PostMapping("/register")
    public ResponseEntity register(@RequestBody RegisterRequestDTO body){
        Optional<Usuario> user = this.repository.findByNome(body.nome());

        if(user.isEmpty()) {
            Usuario newUser = new Usuario();
            newUser.setNome(body.nome());
            newUser.setCod_funcionario(body.cod_funcionario());
            newUser.setStatus(body.status());
            newUser.setSenha(passwordEncoder.encode(body.senha()));
            newUser.setIsAdmin(body.isAdmin());
            this.repository.save(newUser);

            String token = this.tokenService.generateToken(newUser);
            return ResponseEntity.ok(new ResponseDTO(newUser.getNome(), token));
        }
        return ResponseEntity.badRequest().build();
    }
}
