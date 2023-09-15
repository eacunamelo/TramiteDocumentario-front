import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientosModule } from '../business/mantenimientos/mantenimientos.module';
import { MesadepartesModule  } from '../business/mesadepartes/mesadepartes.module';
import { RecepcionModule } from '../business/recepcion/recepcion.module';
import { ReportesModule } from '../business/reportes/reportes.module';

import { DashboardComponent } from './dashboard.component';

//Rutas
import { routing } from './dashboard.routing';

import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';
import { SettingComponent } from './components/setting/setting.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    MantenimientosModule,
    MesadepartesModule,
    RecepcionModule,
    ReportesModule,
    routing
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent, 
    FooterComponent,
    MenuComponent,
    ContentComponent,
    SettingComponent,
  ],
  providers: []
})
export class DashboardModule { }
