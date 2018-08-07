import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria';

@Component({
  selector: 'app-categoria-consulta',
  templateUrl: './categoria-consulta.component.html',
  styleUrls: ['./categoria-consulta.component.css']
})
export class CategoriaConsultaComponent implements OnInit {

  constructor() { }
  categorias = new Array();
  ngOnInit() {
    this.categorias.push(this.gerarCategoria('laticionio', null));
    this.categorias.push(this.gerarCategoria('leite', this.categorias[0]));
    this.categorias.push(this.gerarCategoria('arroz', null));
  }

  gerarCategoria(nome, pai) {
    let categoria = new Categoria();
    categoria.nome = nome;
    categoria.categoriaPai = pai;
    
    return categoria;
  }
}
