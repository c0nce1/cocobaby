import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './Pages/portafolio/portafolio.component';
import { AboutComponent } from './Pages/about/about.component';
import { ItemComponent } from './Pages/item/item.component';

const routes: Routes = [
{path:'home', component: PortafolioComponent},
{path:'about', component: AboutComponent},
{path:'item', component: ItemComponent},
{path:'**', pathMatch: 'full' ,redirectTo:'home'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
