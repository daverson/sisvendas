import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { CategoriaConsultaComponent } from './categoria-consulta/categoria-consulta.component';
import { CategoriaCreateComponent } from './categoria-create/categoria-create.component';
import { CategoriaPaiPipe } from './pipe/categoria-pai.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoConsultaComponent } from './produto-consulta/produto-consulta.component';


const appRoutes: Routes = [
   { path: 'categoria', component: CategoriaConsultaComponent },
   { path: 'produto', component: ProdutoConsultaComponent },
   { path: 'categoria/incluir', component: CategoriaCreateComponent },
   { path: 'categoria/visualizar/:id', component: CategoriaCreateComponent },
   { path: 'categoria/editar/:id', component: CategoriaCreateComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CategoriaCreateComponent,
    CategoriaConsultaComponent,
    CategoriaPaiPipe,
    ProdutoConsultaComponent
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
    AngularFontAwesomeModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
