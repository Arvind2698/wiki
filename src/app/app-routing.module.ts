import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ImageHomeComponent } from './image-home/image-home.component';
import { WikiHomeComponent } from './wiki-home/wiki-home.component';

const routes: Routes = [
  {
    path:"",
    component:HomePageComponent
  },
  {
    path:"wiki",
    component:WikiHomeComponent
  },
  {
    path:"img",
    component:ImageHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
