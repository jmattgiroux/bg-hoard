import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [
    AppComponent // Make sure AppComponent is in the declarations array
  ],
  imports: [
    BrowserModule,
    // ... other imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
