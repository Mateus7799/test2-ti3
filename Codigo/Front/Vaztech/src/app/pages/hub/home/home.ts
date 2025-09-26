import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  // Usuário mockado
  user = {
    nome: 'Usuário Teste',
    role: 'Admin',
  };

  // Menu mockado (sidebar) - Home é o primeiro item
  menuItems = [
    { label: 'Home', route: '/home', icon: 'pi pi-home' },
    { label: 'Relatórios', route: '/relatorios', icon: 'pi pi-chart-line' },
    { label: 'Usuários', route: '/usuarios', icon: 'pi pi-users' },
  ];

  // Cards mockados (conteúdo principal)
  mockCards = [
    { title: 'Relatórios', description: 'Acompanhe os relatórios do sistema.' },
    { title: 'Usuários', description: 'Gerencie os usuários cadastrados.' },
    { title: 'Configurações', description: 'Ajuste as configurações do sistema.' },
  ];
}
