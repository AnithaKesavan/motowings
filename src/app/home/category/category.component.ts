import { Component } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  constructor(private router: Router) {

  }

  move(name) {
    
  }
}
