import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { WishesComponent } from './wishes/wishes.component';

const routes: Routes = [
  {path:'messages',component:IndexComponent},
  {path:'wishes',component:WishesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
