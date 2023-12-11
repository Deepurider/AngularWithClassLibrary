import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { CONFIG_TOKEN, Config } from './tokens/tokens';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [
    { provide: CONFIG_TOKEN, useValue: { localUrl: '192.168.1.100' } as Config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
