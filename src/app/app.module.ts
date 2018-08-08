import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { CategoriaCreateComponent } from './categoria-create/categoria-create.component';
import { CategoriaConsultaComponent } from './categoria-consulta/categoria-consulta.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriaPaiPipe } from './pipe/categoria-pai.pipe';

const appRoutes: Routes = [
   { path: 'categoria', component: CategoriaConsultaComponent },
   { path: 'categoria/incluir', component: CategoriaCreateComponent },
   { path: 'categoria/visualizar/:id', component: CategoriaCreateComponent },
   { path: 'categoria/editar/:id', component: CategoriaCreateComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CategoriaCreateComponent,
    CategoriaConsultaComponent,
    CategoriaPaiPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
