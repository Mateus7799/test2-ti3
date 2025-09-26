import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IftaLabel } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-formulario-estoque',
  imports: [FormsModule, InputTextModule, IftaLabel, DatePickerModule, InputNumberModule],
  templateUrl: './formulario-estoque.html',
  styleUrl: './formulario-estoque.css',
})
export class FormularioEstoque {}
