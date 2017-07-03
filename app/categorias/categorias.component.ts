import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {CategoriaService} from '../categorias/categoria.service';
import {Categoria} from '../categorias/categoria';



@Component({
  selector: 'categorias',
    providers: [CategoriaService],
  styleUrls: ["./app/categorias/categorias.css", "app/styles/table.css"],
  templateUrl: "./app/categorias/categorias.html"
       
})
export class CategoriasComponent  {
  public categorias: Array < Categoria > ;
  public categoria:Categoria;
  private categoriaService:CategoriaService;
  constructor(private  _categoriaService: CategoriaService) {
    this.categoriaService = _categoriaService;
    this.categorias = _categoriaService.getCategorias();
       
  }

  ngOnInit() {
   this.categoria = new Categoria();
  }

  agregarCategoria(){
    this.categoriaService.addCategoria(this.categoria);
    this.categoria = new Categoria();
  }
}