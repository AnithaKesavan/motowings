import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { ToolsComponent } from './tools/tools.component';

// Widgest Components
import { BlogComponent } from './widgets/blog/blog.component';
import { CollectionComponent } from './widgets/collection/collection.component';
import { LogoComponent } from './widgets/logo/logo.component';
import { ServicesComponent } from './widgets/services/services.component';
import { SliderComponent } from './widgets/slider/slider.component'; 
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    ToolsComponent,
    // Widgest Components
    SliderComponent,
    BlogComponent,
    LogoComponent,
    ServicesComponent,
    SliderComponent,
    CollectionComponent,
    CategoryComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
