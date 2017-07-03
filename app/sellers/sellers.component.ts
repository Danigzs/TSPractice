import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {EditSellerComponent} from './editseller.component';
import {
  SellerService
} from './seller.service';
import {
  Seller
} from './seller';



@Component({
  selector: 'sellers',
  providers: [SellerService],
  styleUrls: ["./app/sellers/sellers.css", "app/styles/table.css"],
  templateUrl: "./app/sellers/sellers.html"

})
export class SellersComponent {
  public sellers: Array < Seller > ;
  public seller: Seller;
  public showEditSeller: boolean = false;
  public editSellerSelected :Seller;
  constructor(private _sellerService: SellerService) {}

  ngOnInit() {
    this.seller = new Seller();
    this.reloadSellers();
  }

  reloadSellers() {
    this.seller = new Seller();
    this._sellerService.getSellers().subscribe(
      data => {
        this.sellers = data;
      }
    )
  }
  agregarSeller() {

    this._sellerService.addSeller(this.seller).subscribe(
      data => {
        this.reloadSellers();

      }
    );
  }
  editSeller(seller:Seller) {
    this.editSellerSelected = Seller.copyNewSeller(seller);
    this.showEditSeller = true;
  }


  onCloseEdit() {
    this._sellerService.getSellers().subscribe(
      data => {
        this.sellers = data;
          this.showEditSeller = false;
      }
    )
  } 
}
