import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoriaCreateComponent } from './categoria-create/categoria-create.component';
import { CategoriaConsultaComponent } from './categoria-consulta/categoria-consulta.component';

const appRoutes: Routes = [
   { path: '/categoria', component: CategoriaConsultaComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    CategoriaCreateComponent,
    CategoriaConsultaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
