import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenciasModule } from './conferencias/conferencias.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    ConferenciasModule,
    HttpClientModule,
  ]
})
export class AppModule { }
