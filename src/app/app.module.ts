import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FormsModule } from '@angular/forms';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { DeletarComponent } from './deletar/deletar.component';

@NgModule({
  declarations: [AppComponent, ListarComponent, CadastrarComponent, AtualizarComponent, DeletarComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
