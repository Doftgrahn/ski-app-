import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkiComponent } from './ski/ski.component';
import { FormService } from './shared/form.service';

@NgModule({
  declarations: [
    AppComponent,
    SkiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
