import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { BarRatingModule } from "ngx-bar-rating";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

// Header and Footer Components
import { FooterOneComponent } from './footer/footer-one/footer-one.component';
import { HeaderOneComponent } from './header/header-one/header-one.component';

// Components
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductBoxFiveComponent } from './components/product/product-box-five/product-box-five.component';
import { ProductBoxFourComponent } from './components/product/product-box-four/product-box-four.component';
import { ProductBoxOneComponent } from './components/product/product-box-one/product-box-one.component';
import { ProductBoxThreeComponent } from './components/product/product-box-three/product-box-three.component';
import { ProductBoxTwoComponent } from './components/product/product-box-two/product-box-two.component';
import { ProductBoxVerticalSliderComponent } from './components/product/product-box-vertical-slider/product-box-vertical-slider.component';
import { ProductBoxVerticalComponent } from './components/product/product-box-vertical/product-box-vertical.component';
import { SettingsComponent } from './components/settings/settings.component';

// Modals Components
import { AgeVerificationComponent } from './components/modal/age-verification/age-verification.component';
import { CartModalComponent } from './components/modal/cart-modal/cart-modal.component';
import { CartVariationComponent } from './components/modal/cart-variation/cart-variation.component';
import { NewsletterComponent } from './components/modal/newsletter/newsletter.component';
import { QuickViewComponent } from './components/modal/quick-view/quick-view.component';
import { SizeModalComponent } from './components/modal/size-modal/size-modal.component';
import { VideoModalComponent } from './components/modal/video-modal/video-modal.component';

// Skeleton Loader Components
import { SkeletonProductBoxComponent } from './components/skeleton/skeleton-product-box/skeleton-product-box.component';

// Layout Box

// Tap To Top
import { TapToTopComponent } from './components/tap-to-top/tap-to-top.component';

// Pipes
import { DiscountPipe } from './pipes/discount.pipe';

@NgModule({
  declarations: [
    HeaderOneComponent,
    FooterOneComponent, 
    LeftMenuComponent,
    MenuComponent,
    SettingsComponent,
    BreadcrumbComponent,
    CategoriesComponent,
    ProductBoxOneComponent,
    ProductBoxTwoComponent,
    ProductBoxThreeComponent,
    ProductBoxFourComponent,
    ProductBoxFiveComponent,
    ProductBoxVerticalComponent,
    ProductBoxVerticalSliderComponent,
    NewsletterComponent,
    QuickViewComponent,
    CartModalComponent,
    CartVariationComponent,
    VideoModalComponent,
    SizeModalComponent,
    AgeVerificationComponent,
    SkeletonProductBoxComponent, 
    TapToTopComponent,
    DiscountPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CarouselModule,
    BarRatingModule,
    LazyLoadImageModule,
    NgxSkeletonLoaderModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CarouselModule,
    BarRatingModule,
    LazyLoadImageModule,
    NgxSkeletonLoaderModule,
    TranslateModule,
    HeaderOneComponent,
    FooterOneComponent, 
    BreadcrumbComponent,
    CategoriesComponent,
    ProductBoxOneComponent,
    ProductBoxTwoComponent,
    ProductBoxThreeComponent,
    ProductBoxFourComponent,
    ProductBoxFiveComponent,
    ProductBoxVerticalComponent,
    ProductBoxVerticalSliderComponent,
    NewsletterComponent,
    QuickViewComponent,
    CartModalComponent,
    CartVariationComponent,
    VideoModalComponent,
    SizeModalComponent,
    AgeVerificationComponent,
    SkeletonProductBoxComponent, 
    TapToTopComponent,
    DiscountPipe
  ]
})
export class SharedModule { }
