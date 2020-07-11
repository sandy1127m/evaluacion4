import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TareasComponent } from './tareas/tareas.component';
import { NotasComponent } from './notas/notas.component';
import { AppRutasModule } from './app-rutas.module';
import { NuevastareasComponent } from './nuevastareas/nuevastareas.component';
import { NuevasnotasComponent } from './nuevasnotas/nuevasnotas.component';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    NotasComponent,
    NuevastareasComponent,
    NuevasnotasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRutasModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
