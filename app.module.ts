import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './component/layouts/layouts.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule } from '@angular/forms';
import { BasketComponent } from './component/basket/basket.component';
import { FavoritesComponent } from './component/favorites/favorites.component';
import { LoginComponent } from './component/login/login.component';
import { AccountInfoComponent } from './component/account-info/account-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    HomeComponent,
    BasketComponent,
    FavoritesComponent,
    LoginComponent,
    AccountInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
