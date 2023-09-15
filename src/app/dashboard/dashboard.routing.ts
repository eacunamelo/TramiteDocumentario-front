import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

//Componentes
import { DashboardComponent } from './dashboard.component';
//Business
 //Recepcion
import { RecepciondocumentomainComponent } from '../business/recepcion/components/recepciondocumentos/recepciondocumentomain/recepciondocumentomain.component';
 //Mantenimiento
import { PersonaeditComponent } from '../business/mantenimientos/components/persona/personaedit/personaedit.component';
import { ProcedimientoeditComponent } from '../business/mantenimientos/components/procedimiento/procedimientoedit/procedimientoedit.component';
import { ProcedimientomainComponent } from '../business/mantenimientos/components/procedimiento/procedimientomain/procedimientomain.component';
import { DocumentoeditComponent } from '../business/mantenimientos/components/documento/documentoedit/documentoedit.component';
  //Mesa de Partes
import { BandejaentradamainComponent } from '../business/mesadepartes/components/process/bandejaentrada/bandejaentradamain/bandejaentradamain.component';
import { BandejaprocesomainComponent } from '../business/mesadepartes/components/process/bandejaproceso/bandejaprocesomain/bandejaprocesomain.component';
import { BandejaenviadosmainComponent } from '../business/mesadepartes/components/process/bandejaenviados/bandejaenviadosmain/bandejaenviadosmain.component';
import { BandejadespachomainComponent } from '../business/mesadepartes/components/process/bandejadespacho/bandejadespachomain/bandejadespachomain.component';
import { BandejaconsultasmainComponent } from '../business/mesadepartes/components/process/bandejaconsultas/bandejaconsultasmain/bandejaconsultasmain.component';

import { AdmisionexpedientemainComponent } from '../business/mesadepartes/components/process/admisionexpediente/admisionexpedientemain/admisionexpedientemain.component';
import { InformacionexpedienteComponent } from '../business/mesadepartes/components/shared/informacionexpediente/informacionexpediente.component';
  //Reportes
import { HojaderutamainComponent } from '../business/reportes/components/hojaderuta/hojaderutamain/hojaderutamain.component';
import { ExpedientesrealizadosmainComponent } from '../business/reportes/components/expedientesrealizados/expedientesrealizadosmain/expedientesrealizadosmain.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [],
    children: [
      {
        path: 'business',
        children: [
          {
            path: 'recepcion',
            children: [
              { path: 'recepciondocumento', component: RecepciondocumentomainComponent },
            ],
          },
          {
            path: 'mantenimientos',
            children: [
              { path: 'procedimientoedit', component: ProcedimientoeditComponent },
              { path: 'procedimientomain', component: ProcedimientomainComponent },
              { path: 'personaedit', component: PersonaeditComponent },
              { path: 'documentoedit', component: DocumentoeditComponent },
            ],
          },
          {
            path: 'mesadepartes',
            children: [
              { path: 'admisionExpediente', component: AdmisionexpedientemainComponent },
              { path: 'bandejaDeEntrada', component: BandejaentradamainComponent },
              { path: 'bandejaDeProceso', component: BandejaprocesomainComponent },
              { path: 'bandejaDeEnviados', component: BandejaenviadosmainComponent },
              { path: 'bandejaDeDespacho', component: BandejadespachomainComponent },
              { path: 'bandejaDeConsultas', component: BandejaconsultasmainComponent },
              /*Shared*/
              { path: 'informacionexpediente', component: InformacionexpedienteComponent },
            ],
          },
          {
            path: 'reportes',
            children: [
              { path: 'hojaderuta', component: HojaderutamainComponent },
              { path: 'expedientesrealizados', component: ExpedientesrealizadosmainComponent },
            ],
          },
        ],
      }
    ]
  }
]);
