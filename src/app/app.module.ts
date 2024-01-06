import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { API_TOKEN, CONFIG_TOKEN, Config, REPORTING_TOKEN, REST_TOKEN } from './tokens/tokens';
import { RestService } from './services/rest.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
  ],
  providers: [
    { provide: CONFIG_TOKEN, useValue: { localUrl: '192.168.1.100' } as Config },
    {
      provide: API_TOKEN, useValue: { localUrl: '192.168.2.100' } as Config,
    },
    {
      provide: REPORTING_TOKEN, useFactory: () => f1()
    },
    {
      provide: REST_TOKEN, useClass: RestService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function f1(): Config {
  return { localUrl: '192.168.4.100' } as Config;
}
