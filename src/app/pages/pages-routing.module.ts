import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from '../home/category/category.component';
import { GalleryComponent } from '../home/gallery/gallery.component';
import { ProductsComponent } from '../home/products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './account/cart/cart.component';
import { CheckoutComponent } from './account/checkout/checkout.component';
import { ContactComponent } from './account/contact/contact.component';
import { DashboardComponent } from './account/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './account/forget-password/forget-password.component';
import { LoginComponent } from './account/login/login.component';
import { ProfileComponent } from './account/profile/profile.component';
import { RegisterComponent } from './account/register/register.component';
import { WishlistComponent } from './account/wishlist/wishlist.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { BlogLeftSidebarComponent } from './blog/blog-left-sidebar/blog-left-sidebar.component';
import { BlogNoSidebarComponent } from './blog/blog-no-sidebar/blog-no-sidebar.component';
import { BlogRightSidebarComponent } from './blog/blog-right-sidebar/blog-right-sidebar.component';
import { CollectionComponent } from './collection/collection.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { CompareOneComponent } from './compare/compare-one/compare-one.component';
import { CompareTwoComponent } from './compare/compare-two/compare-two.component';
import { ErrorComponent } from './error/error.component';
import { FaqComponent } from './faq/faq.component';
import { LookbookComponent } from './lookbook/lookbook.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { GridFourComponent } from './portfolio/grid-four/grid-four.component';
import { GridThreeComponent } from './portfolio/grid-three/grid-three.component';
import { GridTwoComponent } from './portfolio/grid-two/grid-two.component';
import { ReviewComponent } from './review/review.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { 
    path: 'wishlist', 
    component: WishlistComponent 
  },
  { 
    path: 'cart', 
    component: CartComponent 
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  { 
    path: 'forget/password', 
    component: ForgetPasswordComponent 
  },
  { 
    path: 'profile', 
    component: ProfileComponent 
  },
  { 
    path: 'contact', 
    component: ContactComponent 
  },
  { 
    path: 'checkout', 
    component: CheckoutComponent 
  },
  { 
    path: 'aboutus', 
    component: AboutUsComponent 
  },
  {
    path: "product/:id",
    component: ProductsComponent
  },
  {
    path: 'product',
    component: CategoryComponent
  },
  { 
    path: 'search', 
    component: SearchComponent 
  },
  { 
    path: 'gallery', 
    component: GalleryComponent 
  },
  { 
    path: 'review', 
    component: ReviewComponent 
  },
  { 
    path: 'order/success', 
    component: OrderSuccessComponent 
  },
  { 
    path: 'compare/one', 
    component: CompareOneComponent 
  },
  { 
    path: 'compare/two', 
    component: CompareTwoComponent 
  },
  { 
    path: 'collection', 
    component: CollectionComponent 
  },
  { 
    path: 'lookbook', 
    component: LookbookComponent 
  },
  { 
    path: '404', 
    component: ErrorComponent 
  },
  { 
    path: 'comingsoon', 
    component: ComingSoonComponent 
  },
  { 
    path: 'faq', 
    component: FaqComponent 
  },
  { 
    path: 'blog/left/sidebar', 
    component: BlogLeftSidebarComponent 
  },
  { 
    path: 'blog/right/sidebar', 
    component: BlogRightSidebarComponent 
  },
  { 
    path: 'blog/no/sidebar', 
    component: BlogNoSidebarComponent 
  },
  { 
    path: 'blog/details', 
    component: BlogDetailsComponent 
  },
  { 
    path: 'portfolio/grid/two', 
    component: GridTwoComponent 
  },
  { 
    path: 'portfolio/grid/three', 
    component: GridThreeComponent 
  },
  { 
    path: 'portfolio/grid/four', 
    component: GridFourComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
