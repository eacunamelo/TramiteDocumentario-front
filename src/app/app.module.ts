import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardModule } from './dashboard/dashboard.module';
import { MantenimientosModule } from './business/mantenimientos/mantenimientos.module';
import { MesadepartesModule  } from './business/mesadepartes/mesadepartes.module';
import { RecepcionModule } from './business/recepcion/recepcion.module';

//Componentes
import { AppComponent } from './app.component';

//Rutas
import { routing } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    MantenimientosModule,
    MesadepartesModule,
    RecepcionModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
