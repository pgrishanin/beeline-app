/// <reference path="./typings/typings.d.ts"/>

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { KSSwiperModule } from 'angular2-swiper';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { ResponsiveListComponent } from './components/responsive-list/responsive-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';

import { ProductService } from './services/product.service';

const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'details/:id/:connected',      component: DetailsPageComponent },
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
    ResponsiveListComponent,
    PageNotFoundComponent,
    ProductPreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    KSSwiperModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
