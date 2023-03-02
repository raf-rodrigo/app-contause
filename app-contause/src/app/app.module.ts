import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LogoComponent } from './logo/logo.component';
import { ImagemInicialComponent } from './imagem-inicial/imagem-inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LogoComponent,
    ImagemInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
