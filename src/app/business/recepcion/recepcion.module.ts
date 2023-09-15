import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecepciondocumentomainComponent } from './components/recepciondocumentos/recepciondocumentomain/recepciondocumentomain.component';
import { RecepciondocumentoeditComponent } from './components/recepciondocumentos/recepciondocumentoedit/recepciondocumentoedit.component';
import { routing } from '../../dashboard/dashboard.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Modules
import { MantenimientosModule } from  '../mantenimientos/mantenimientos.module';

@NgModule({
  declarations: [
    RecepciondocumentomainComponent, 
    RecepciondocumentoeditComponent,
  ],
  imports: [
    CommonModule,
    routing,
    MantenimientosModule,
    FormsModule,
    HttpClientModule
  ]
})
export class RecepcionModule { }

