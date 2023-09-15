import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProcedimientomainComponent } from './components/procedimiento/procedimientomain/procedimientomain.component';
import { ProcedimientoeditComponent } from './components/procedimiento/procedimientoedit/procedimientoedit.component';
import { PersonamainComponent } from './components/persona/personamain/personamain.component';
import { PersonaeditComponent } from './components/persona/personaedit/personaedit.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { DocumentoeditComponent } from './components/documento/documentoedit/documentoedit.component';
//Ruta
import { routing } from '../../dashboard/dashboard.routing';


@NgModule({
  declarations: [
     ProcedimientomainComponent,
     ProcedimientoeditComponent,
     PersonamainComponent,
     PersonaeditComponent,
     DocumentoeditComponent
     ],
  imports: [
    CommonModule,
    routing,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    PersonaeditComponent,
    DocumentoeditComponent
  ]
})
export class MantenimientosModule { }
