import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from './input-field/input-field.component';
import { TdBoxComponent } from './td-box/td-box.component';
import { InputAndDivComponent } from './input-and-div/input-and-div.component';
import { AutofocusDirective } from './utilities/autofocusDirective';
import { NumberOnlyDirective } from './utilities/onlyNumbers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    InputFieldComponent,
    TdBoxComponent,
    InputAndDivComponent,
    AutofocusDirective,
    NumberOnlyDirective
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
