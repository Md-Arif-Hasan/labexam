import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDataComponent } from './form-data/form-data.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { FormsModule } from '@angular/forms';  // <<<< import it here

@NgModule({
  declarations: [
    AppComponent,
    FormDataComponent,
    ShowDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
