import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HojaderutamainComponent } from './components/hojaderuta/hojaderutamain/hojaderutamain.component';
import { ExpedientesrealizadosmainComponent } from './components/expedientesrealizados/expedientesrealizadosmain/expedientesrealizadosmain.component';
import { routing } from '../../dashboard/dashboard.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HojaderutamainComponent, 
    ExpedientesrealizadosmainComponent],
  imports: [
    CommonModule,
    routing,
    FormsModule
  ]
})
export class ReportesModule { }
