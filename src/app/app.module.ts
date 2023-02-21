import { BasicHightLightDirective } from './basic-highlight/basic-highlight.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BetterHightlightDirective } from './better-hightlight/better-hightlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHightLightDirective,
    BetterHightlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
