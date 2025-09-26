import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthResponse } from '../models/auth.models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  router = inject(Router);
  apiRoute = 'auth/login';

  public get isAuthenticated(): boolean {
    const auth: AuthResponse = JSON.parse(sessionStorage.getItem('auth') ?? '{}');
    return !!auth.token;
  }

  public get username(): string | undefined {
    const auth: AuthResponse = JSON.parse(sessionStorage.getItem('auth') ?? '{}');
    console.log(auth);
    return auth.nome;
  }

  public login(isAdmin: boolean, senha: string) {
    this.http
      .post<AuthResponse>(`${environment.apiURL}/${this.apiRoute}`, { isAdmin, senha })
      .subscribe({
        next: (res) => {
          console.log(res);
          sessionStorage.setItem('auth', JSON.stringify(res));
          this.router.navigate(['hub']).catch((err) => console.log(err));
        },
        error: (err) => {
          console.error(err);
        },
      });
  }
}
