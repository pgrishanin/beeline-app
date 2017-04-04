/// <reference path="./typings/typings.d.ts"/>

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { ResponsiveListComponent } from './components/responsive-list/responsive-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GoodsPreviewComponent } from './components/goods-preview/goods-preview.component';

import { GoodsService } from './services/goods.service';

const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent },
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
    ResponsiveListComponent,
    PageNotFoundComponent,
    GoodsPreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    GoodsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
