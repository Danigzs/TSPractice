import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  ViewContainerRef
} from '@angular/core';
import {
  SellerService
} from './seller.service';
import {
  Seller
} from './seller';



@Component({
  selector: 'editseller',
  providers: [SellerService],
  styleUrls: ["./app/sellers/edit-seller.css"],
  templateUrl: "./app/sellers/edit-seller.html"

})
export class EditSellerComponent {
  @Output() onCloseEdit = new EventEmitter();

  @Input() seller: Seller;

  constructor(private _sellerService: SellerService) {}

  close() {
    this.onCloseEdit.emit();
  }
  updateSeller() {
    this._sellerService.updateSeller(this.seller).subscribe(
      data => {
        if(!data){alert("Ha ocurrido un error")}
        if(data){alert("Vendedor actualizado correctamente")}
        this.onCloseEdit.emit();
        
      }
    );
  }
}
