import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { ClickMeComponent } from './click-me.component';
import {
    KeyUpComponent,
    KeyUp2Component,
    OnEnterComponent
} from './key-up.component';
import { HeroFormComponent } from './hero-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
      AppComponent,
      ClickMeComponent,
      KeyUpComponent,
      KeyUp2Component,
      OnEnterComponent,
      HeroFormComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
