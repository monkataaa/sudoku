import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from './input-field/input-field.component';
import { TdComponentComponent } from './td-component/td-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    InputFieldComponent,
    TdComponentComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
