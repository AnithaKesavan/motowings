import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  img = [
    "assets/images/bike/2.jpg",
    "assets/images/bike/GLO09371.jpg",
    "assets/images/bike/GLO09380.jpg",
    "assets/images/bike/GLO09382.jpg",
    "assets/images/bike/GLO09390.jpg",
    "assets/images/bike/GLO09391 - Copy.jpg",
    "assets/images/bike/GLO09409.jpg",
    "assets/images/bike/GLO09411.jpg",
    "assets/images/bike/GLO09414.jpg",
    "assets/images/bike/GLO09416.jpg",
    "assets/images/bike/GLO09417.jpg",
    "assets/images/bike/GLO09422.jpg",
    "assets/images/bike/GLO09424.jpg",
    "assets/images/bike/GLO09425.jpg",
    "assets/images/bike/GLO09427.jpg",
    "assets/images/bike/GLO09431 - Copy.jpg",
    "assets/images/bike/GLO09477.jpg",
    "assets/images/bike/GLO09478.jpg",
    "assets/images/bike/GLO09481.jpg",
    "assets/images/bike/GLO09484.jpg",
    "assets/images/bike/GLO09486.jpg",
    "assets/images/bike/GLO09489.jpg",
    "assets/images/bike/GLO09491.jpg",
    "assets/images/bike/GLO09492.jpg",
    "assets/images/bike/GLO09493.jpg",
    "assets/images/bike/GLO09494.jpg",
    "assets/images/bike/GLO09497.jpg",
    "assets/images/bike/GLO09502.jpg",
    "assets/images/bike/GLO09504.jpg",
    "assets/images/bike/GLO09507.jpg",
    "assets/images/bike/GLO09510.jpg",
  ]

  imgSrc = "";
  display = "none";

  onClick(event) {
    this.imgSrc = event;
  }

  openModal(images) {
    this.imgSrc = images;
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }


}
