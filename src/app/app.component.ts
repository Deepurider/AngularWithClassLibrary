import { Component, Inject } from '@angular/core';
import { API_TOKEN, CONFIG_TOKEN, Config, REPORTING_TOKEN } from './tokens/tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project1';

  constructor(
    @Inject(CONFIG_TOKEN) public config: Config,
    @Inject(API_TOKEN) public apiConfig: Config,
    @Inject(REPORTING_TOKEN) public reportingConfig: Config,
  ) {}
}
