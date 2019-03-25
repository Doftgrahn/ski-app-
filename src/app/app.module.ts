import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkiComponent } from './ski/ski.component';
import { FormService } from './shared/form.service';
import { InfoComponent } from './info/info.component';

import { AppRoutingModule } from './shared/app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SkiComponent,
    InfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
