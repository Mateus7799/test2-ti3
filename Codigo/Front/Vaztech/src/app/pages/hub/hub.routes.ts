import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { PessoasTabsComponent } from './pessoas-tabs/pessoas-tabs';
import { EstoqueTabsComponent } from './estoque-tabs/estoque-tabs';
import { VendaTabsComponent } from './venda-tabs/venda-tabs';
import { FinanceiroTabsComponent } from './financeiro-tabs/financeiro-tabs';

export const HubRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'pessoas', component: PessoasTabsComponent },
  { path: 'estoque', component: EstoqueTabsComponent },
  { path: 'vendas', component: VendaTabsComponent },
  { path: 'financeiro', component: FinanceiroTabsComponent },
];
