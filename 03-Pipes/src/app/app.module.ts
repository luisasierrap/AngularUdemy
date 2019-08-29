import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './Pipes/capitalizado.pipe';
import { DomseguroPipe } from './Pipes/domseguro.pipe';
import { ContrasenaPipe } from './Pipes/contrasena.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "en-US" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
