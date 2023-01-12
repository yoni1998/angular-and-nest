import { ComponentModule } from './../../../../libs/component/src/lib/component.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, ComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
