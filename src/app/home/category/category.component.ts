import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  hide = true;

  constructor(private router: Router) {
    console.log(router.url);
    if (router.url === '/pages/product') {
      this.hide = true;
    } else {
      this.hide = false;
    }
  }

  move(name) {
    this.router.navigateByUrl('/pages/product/' + name);
  }
}
