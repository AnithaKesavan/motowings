import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToolsComponent } from './tools/tools.component';
import { ProductsComponent } from './products/products.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [  
  {
    path: '',
    component: ToolsComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
