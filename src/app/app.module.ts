import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { NavComponent } from './nav/nav.component';
import { CardHomeComponent } from './card-home/card-home.component';
import { CardListComponent } from './card-list/card-list.component';
import { BackgroundComponent } from './background/background.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ItemComponent,
    NavComponent,
    CardHomeComponent,
    CardListComponent,
    BackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
