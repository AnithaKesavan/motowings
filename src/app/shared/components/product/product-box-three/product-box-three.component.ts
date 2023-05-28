import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { QuickViewComponent } from "../../modal/quick-view/quick-view.component";
import { CartModalComponent } from "../../modal/cart-modal/cart-modal.component";
import { Product } from "../../../classes/product";
import { ProductService } from "../../../services/product.service";

@Component({
  selector: 'app-product-box-three',
  templateUrl: './product-box-three.component.html',
  styleUrls: ['./product-box-three.component.scss']
})
export class ProductBoxThreeComponent implements OnInit {

   products: any = [];
  @Input() currency: any = this.productService.Currency; // Default Currency
  @Input() cartModal: boolean = false; // Default False
  
  @ViewChild("quickView") QuickView: QuickViewComponent;
  @ViewChild("cartModal") CartModal: CartModalComponent;

  ProductSliderConfig: any = {
    loop: false,
    dots: false,
    navSpeed: 300,
    autoHeight: true,
    responsive: {
      991: {
        items: 4
      },
      767: {
        items: 3
      },
      420: {
        items: 2
      },
      0: {
        items: 1
      }
    }
  }

  constructor(private productService: ProductService) { 
    this.products = [
      {
        title: 'Clasic',
        images: [
          {src: 'assets/images/bike/classic350filter/1.png'}
        ]
      }
    ];
  }

  ngOnInit(): void {
  }

  addToCart(product: any) {
    this.productService.addToCart(product);
  }

  addToWishlist(product: any) {
    this.productService.addToWishlist(product);
  }

  addToCompare(product: any) {
    this.productService.addToCompare(product);
  }

}
