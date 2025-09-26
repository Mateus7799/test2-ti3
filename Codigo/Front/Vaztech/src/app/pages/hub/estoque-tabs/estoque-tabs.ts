import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ItemEstoque } from '../../../models/item-estoque.model';
import { FormularioEstoque } from './formulario-estoque/formulario-estoque';

@Component({
  selector: 'app-estoque-tabs',
  standalone: true,
  imports: [
    CommonModule,
    TabsModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    FormularioEstoque,
  ],
  templateUrl: './estoque-tabs.html',
})
export class EstoqueTabsComponent {
  itensEstoqueMock: ItemEstoque[] = [
    {
      numeroSerie: 2001,
      produto: 'iPhone',
      modelo: 'iPhone 15 Pro',
      precoCusto: 6500,
      pessoaId: 1,
      observacoes: 'Leve arranhão na lateral',
      dataCompra: new Date('2024-02-10'),
      status: 'VENDIDO',
      cor: 'Titânio Natural',
    },
    {
      numeroSerie: 2002,
      produto: 'MacBook',
      modelo: 'MacBook Air M2',
      precoCusto: 7200,
      pessoaId: 2,
      observacoes: 'Sem adaptador de tomada incluso',
      dataCompra: new Date('2023-09-25'),
      status: 'EM ESTOQUE',
      cor: 'Starlight',
    },
    {
      numeroSerie: 2003,
      produto: 'Apple Watch',
      modelo: 'Apple Watch Series 9 GPS 45mm',
      precoCusto: 2300,
      pessoaId: 3,
      observacoes: 'Pulseira esportiva preta',
      dataCompra: new Date('2023-11-18'),
      status: 'ATENÇÃO',
      cor: 'Midnight',
    },
    {
      numeroSerie: 2004,
      produto: 'iPhone',
      modelo: 'iPhone 14',
      precoCusto: 4900,
      pessoaId: 1,
      observacoes: 'Desempenho normal, sem carregador',
      dataCompra: new Date('2023-05-12'),
      status: 'EM ESTOQUE',
      cor: 'Product Red',
    },
    {
      numeroSerie: 2005,
      produto: 'MacBook',
      modelo: "MacBook Pro 14'' M3 Pro",
      precoCusto: 12000,
      pessoaId: 4,
      observacoes: 'Fonte original incluída',
      dataCompra: new Date('2024-03-05'),
      status: 'VENDIDO',
      cor: 'Space Black',
    },
  ];
}
