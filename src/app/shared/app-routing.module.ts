import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SkiComponent } from '../ski/ski.component';
import { InfoComponent } from '../info/info.component';

const routes: Routes = [
  { path: '', redirectTo: '/SkiCalculator', pathMatch: 'full' },
  { path: 'SkiCalculator', component: SkiComponent },
  { path: 'Info', component: InfoComponent }
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
