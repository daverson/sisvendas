import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from './../models/categoria';
import { CategoriaService } from './../providers/categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private categoriaService:CategoriaService,
    private toastr: ToastrService,
    private router: Router) { }

  categoria = new Categoria();
  categorias:Array<Categoria> = [];
  disable;
  edit;
  ngOnInit() {
    this.categoriaService.getCategorias().subscribe((data: any) => {
			this.categorias = data.resource;
		});

    console.log(this.categorias);

    this.route.url.subscribe(value => {
			if (value[1].path == 'visualizar') {
				this.disable = true;
			} else if (value[1].path == 'editar') {
				this.edit = true;
				this.disable = false;
			} else {
				this.disable = false;
			}
		});
		this.route.params.subscribe(params => {
			if (params.id != undefined) {
				this.getById(params.id);
			}
		});
  }

  getById(identificador) {
    this.categoriaService.getCategoria(identificador).subscribe((data:any) => this.categoria = data)
  }

  save() {
    this.categoriaService.save(this.categoria).subscribe((data:any) => {
      this.toastr.success('Categoria cadastrada com sucesso!');
      this.router.navigate(['categoria'])
    });
  }
}
