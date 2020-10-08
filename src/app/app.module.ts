import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCraftBeerComponent } from './create-craft-beer/create-craft-beer.component';
import { CraftBeerListComponent } from './craft-beer-list/craft-beer-list.component';
import { CraftBeerDetailsComponent } from './craft-beer-details/craft-beer-details.component';
import { UpdateCraftBeerComponent } from './update-craft-beer/update-craft-beer.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCraftBeerComponent,
    CraftBeerListComponent,
    CraftBeerDetailsComponent,
    UpdateCraftBeerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
