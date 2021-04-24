import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { ResultComponent } from './calc/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
