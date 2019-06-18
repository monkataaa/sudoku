import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from './input-field/input-field.component';
import { TdBoxComponent } from './td-box/td-box.component';
import { InputAndDivComponent } from './input-and-div/input-and-div.component';
import { AutofocusDirective } from './utilities/autofocusDirective';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    InputFieldComponent,
    TdBoxComponent,
    InputAndDivComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
