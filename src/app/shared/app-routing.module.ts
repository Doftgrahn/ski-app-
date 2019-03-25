import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SkiComponent } from '../ski/ski.component';
import { InfoComponent } from '../info/info.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'SkiCalculator', component: SkiComponent },
  { path: 'Info', component: InfoComponent },
  { path: '**', redirectTo: 'Home', pathMatch: 'full' },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
