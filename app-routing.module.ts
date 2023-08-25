import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './component/layouts/layouts.component';
import { HomeComponent } from './component/home/home.component';
import { BasketComponent } from './component/basket/basket.component';
import { FavoritesComponent } from './component/favorites/favorites.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'basket',
        component: BasketComponent,
      },
      {
        path: 'favorites',
        component: FavoritesComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
