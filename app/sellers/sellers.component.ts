import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {SellerService} from './seller.service';
import {Seller} from './seller';



@Component({
  selector: 'sellers',
    providers: [SellerService],
  styleUrls: ["./app/sellers/sellers.css"],
  templateUrl: "./app/sellers/sellers.html"
       
})
export class SellersComponent  {
  public sellers: Array <Seller > ;
  public seller:Seller;
  constructor(private  _sellerService: SellerService) {
  }

  ngOnInit() {
   this.seller = new Seller();
   this.reloadSellers();
  }

  reloadSellers(){
      this.seller = new Seller();
      this._sellerService.getSellers().subscribe(
     data => {
       this.sellers = data;
     }
   )
  }
  agregarSeller(){
    
    this._sellerService.addSeller(this.seller).subscribe(
      data => {
    this.reloadSellers();

      }
    );
  }
  updateSeller()
    {
       this._sellerService.addSeller(this.seller).subscribe(
      data => {
        this.reloadSellers();
      }
    );
    }
}
