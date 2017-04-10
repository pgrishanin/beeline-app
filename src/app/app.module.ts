/// <reference path="./typings/typings.d.ts"/>

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import 'swiper';
import { SwiperModule } from 'angular2-useful-swiper';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { ResponsiveProductListComponent } from './components/responsive-product-list/responsive-product-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';

import { ProductService } from './services/product.service';
import { ProductFieldValuePipe } from './shared/product-field-value.pipe';

const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'details/:id/:related',      component: DetailsPageComponent },
  { path: 'details/:id',      component: DetailsPageComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DetailsPageComponent,
    ResponsiveProductListComponent,
    PageNotFoundComponent,
    ProductPreviewComponent,
    ProductFieldValuePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    SwiperModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
