import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmisionexpedientemainComponent } from './components/process/admisionexpediente/admisionexpedientemain/admisionexpedientemain.component';
import { BandejaentradamainComponent } from './components/process/bandejaentrada/bandejaentradamain/bandejaentradamain.component';
import { BandejaprocesomainComponent } from './components/process/bandejaproceso/bandejaprocesomain/bandejaprocesomain.component';
import { BandejaenviadosmainComponent } from './components/process/bandejaenviados/bandejaenviadosmain/bandejaenviadosmain.component';
import { BandejadespachomainComponent } from './components/process/bandejadespacho/bandejadespachomain/bandejadespachomain.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import { ButtonVerComponent } from 'src/app/business/mesadepartes/components/process/admisionexpediente/admisionexpedientemain/buttonVerRenderer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule, MatInputModule } from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


//Ruta
import { routing } from '../../dashboard/dashboard.routing';
import { InformacionexpedienteComponent } from './components/shared/informacionexpediente/informacionexpediente.component';

//Modules
import { MantenimientosModule } from  '../mantenimientos/mantenimientos.module';
import { BandejaconsultasmainComponent } from './components/process/bandejaconsultas/bandejaconsultasmain/bandejaconsultasmain.component';

//import { AutoCompleteModule } from 'primeng/autocomplete';


@NgModule({
  declarations: [
    AdmisionexpedientemainComponent, 
    BandejaentradamainComponent, 
    BandejaprocesomainComponent, 
    BandejaenviadosmainComponent, 
    BandejadespachomainComponent, 
    InformacionexpedienteComponent, 
    BandejaconsultasmainComponent,
    ButtonVerComponent
  ],
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([ButtonVerComponent]),
    MantenimientosModule,

    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,

    //AutoCompleteModule
  ]
})
export class MesadepartesModule { }
