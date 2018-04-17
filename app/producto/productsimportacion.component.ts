import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  ViewContainerRef
} from '@angular/core';
import {ProductoService} from './producto.service';
import {Producto} from './producto';
import {UserService} from './../security/user.service'



@Component({
  selector: 'products-importacion',
    providers: [ProductoService],
  styleUrls: ["./app/producto/products-importacion.css",'app/styles/table.css'],
  templateUrl: "./app/producto/products-importacion.html"
})

export class ProductsImportacionComponent  implements OnInit{
  products: Array < Producto > = [] ;
  providerProducts: Array < Producto > = [] ;
  bordesaProducts: Array < Producto > = [] ;
  isUserAdmin:Boolean

  compInfo: string = "Loading";
	//the local file from input tag
	file: any = null;
	//check is fileReader workks
   isFileReaderWork: boolean = false;
  
  constructor(private  _productService: ProductoService,private  _userService:UserService) {
		console.log("MyComp.constructor");
		this.compInfo = "Page Loaded";
  }


	/**
	 * trigger when a file is selected at input tag
	 * @constructor
	 */
	fileChanged(event:Event) {
		console.log("MyApp.fileChanged");
		this.compInfo = "Selected a file";
		//get file
		//need to cast html tag
		//reference： http://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement
		this.file = (<HTMLInputElement>document.getElementById("file")).files[0];
		this.compInfo = "Selected file: " + this.file.name;

		//new fileReader
		var fileReader = new FileReader();
		fileReader.readAsDataURL(this.file);
    //try to read file, this part does not work at all, need a solution
    
    
    var afterFileReaderOnLoad = this.afterFileReaderOnLoad;

		fileReader.onload = function(e) {
			console.log("fileReader.onload");
			
			afterFileReaderOnLoad();

		}

  }
  
  afterFileReaderOnLoad(){
    this.isFileReaderWork = true;
			
    this.compInfo = "FileReader works!";
  }

  ngOnInit() {
    this.isUserAdmin = false;
    this.isUserAdmin = this._userService.isUserAdmin();
   this._productService.getProducts().subscribe(
     data => 
     {
       
       this.products = data;
       this.providerProducts = data.filter(function(x){return x.isProvider == 1});
       this.bordesaProducts =  data.filter(function(x){return x.isBordesa == 1 });
     }
   )
  }

  delete(_producto:Producto, index:number){
    this._productService.delete(_producto).subscribe(
      data => {
        this.ngOnInit();
      }
    );
    
  }
  
}