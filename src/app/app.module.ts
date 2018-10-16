import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PokedexService } from './pokedex.service';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { InformacionComponent } from './informacion/informacion.component';
import { HomeComponent } from './home/home.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'informacion', component: InformacionComponent },


];

@NgModule(  {
  declarations: [
    AppComponent,
    DescripcionComponent,
    InformacionComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    PokedexService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
