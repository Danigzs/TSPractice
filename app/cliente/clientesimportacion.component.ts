import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  Output,
  ViewContainerRef
} from '@angular/core';
import {ClienteService} from './cliente.service';
import {Cliente} from './cliente';
import { UserService } from '../security/user.service';
import { User } from '../register/user';



@Component({
  selector: 'clients-importacion',
    providers: [ClienteService],
  styleUrls: ["./app/cliente/clients-importacion.css", "app/styles/table.css"],
  templateUrl: "./app/cliente/clientes-importacion.html"
})

export class ClientsImportacionComponent  implements OnInit{
   @Input() clientes: Array < Cliente > ;
   @Input() SetOnEditMode:Function;
   @Input() OnDeleteClient:Function;
   clientname:string;
   clientrfc:string;
   clientrazon:string;
   public allClientes:Array<Cliente>;
   cliente:Cliente;
   public isEditing:Boolean;
  isUserAdmin:Boolean;
  userCanEdit:Boolean;
  currentUser:User;
  public users:Array<User>;
  
  public userSelected:User;
  public esVendedor:Boolean;
  constructor(private  _clientService: ClienteService, private _userService:UserService) {
  }




  compInfo: string = "Loading";
	//the local file from input tag
	file: any = null;
	//check is fileReader workks
   isFileReaderWork: boolean = false;
   


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
    
 
		fileReader.readAsText(this.file);
    //try to read file, this part does not work at all, need a solution
    
    
 
    var parent = this;

		fileReader.onload = function(e) {
			console.log("fileReader.onload");
      parent.parseCSV(fileReader.result, '\n', '|');


		}

  }

  OnVendedorChanged(){
    var userSelected = this.userSelected;
    this.clientes = this.clientes.map(function(v,i){  v.vendedor = userSelected; return v});
  }
  parseCSV(text:string, lineTerminator:string, cellTerminator:string) {
		//break the lines apart
		var lines = text.split(lineTerminator);
    this.clientes = [];
		for(var j = 0; j<lines.length; j++){
		  
			if(lines[j] != ""){
		
				//create a table row 
				// var tableRow = table.appendChild(document.createElement('tr'));
		
				//split the rows at the cellTerminator character
				var information = lines[j].split(cellTerminator);
    
        //clientes
        //0 Nombre
        //1 Codigo
        //2 Direccion
        //3 Correo
        //4 Telefono
        //5 RFC
        //6 Razon Social
        //7 Vendedor
        
				// for(var k = 0; k < information.length; k++){
          //append the cell to the row
          var cliente = new Cliente();
          cliente.name = information[0];
          cliente.code = information[1];
          cliente.address = information[2];
          cliente.email = information[3];
          cliente.phone = information[4];
          cliente.rfc = information[5];
          cliente.businessName = information[6];
          cliente.vendedor = this.userSelected;
          this.clientes.push(cliente);
          // cliente.vendedor = information[7];
          // console.log(information[k]);
					// var cell = tableRow.appendChild(document.createElement('td'));
					// cell.appendChild(document.createTextNode(information[k]));
		
				// }
		
			}
  
		}
	  
	  }
		
  afterFileReaderOnLoad(){
    this.isFileReaderWork = true;
			
    this.compInfo = "FileReader works!";
  }

  ngOnInit() {
    this.clientes = [];
    // setTimeout(() => {

    //   var user = this.currentUser;
    //   if(this._userService.isUserAdmin()){ 
         
    //   }
    //   else{
    //       this.clientes = this.clientes.filter(function(v,i){ return v.vendedor._id == user._id;});
    //       if(this.clientes == null){
    //         this.clientes = [];
    //       } 
    //   }
   
    //   this.allClientes = this.clientes;  
    // }, 1000);
    
   //this.clientes = this._clienteService.getClientes();
   this.isUserAdmin = this._userService.isUserAdmin();
   this.currentUser = this._userService.getUser();

   if( this.currentUser.role._id == 1 ||this.currentUser.role._id == 2){
     this.userCanEdit = true;
   }

   this.userSelected = new User();
      this.currentUser = this._userService.getUser();
      this.esVendedor = this._userService.isCurrentUserSeller();
      this.isUserAdmin = this._userService.isUserAdmin();

      this._userService.getSellerUsers().subscribe( data => {
        this.users = data;
        if(this.esVendedor){
          this.userSelected = this.currentUser;
        }
        else {
          this.userSelected = this.users[0];
        }
      });


  } 
  agregarClientes(){
    var totalClientes = this.clientes.length;
    var contadorClientes = 0;
    var parent = this;
    for(var i = 0; i < this.clientes.length;i++){
      this._clientService.addClient(this.clientes[i]).subscribe(data => {
        contadorClientes++;
        if(totalClientes == contadorClientes){
          alert("Clientes agregados");
          parent.clientes = [];
          parent.file = null;
          parent.compInfo = "Selected a file";
        }
      });
    }


  }
  delete(client:Cliente, index:number){
      
     if (index > -1) {
      this.clientes.splice(index, 1);
    }
    
  }
   
}