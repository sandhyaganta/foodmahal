import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './header/restaurant/restaurant.component';
import { SectionComponent } from './section/section.component';
import { BunkethallComponent } from './header/bunkethall/bunkethall.component';
import { BuftsComponent } from './header/bufts/bufts.component';

const routes: Routes = [
  {path:'', redirectTo:'section', pathMatch:'full'},
  {path:'section', component:SectionComponent},
  { path:"Restaurant", component:RestaurantComponent},
  { path:"Bunkethalls", component:BunkethallComponent},
  { path:"Bufts", component:BuftsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
