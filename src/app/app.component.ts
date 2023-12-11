import { Component, Inject } from '@angular/core';
import { CONFIG_TOKEN, Config } from './tokens/tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project1';

  constructor(@Inject(CONFIG_TOKEN) private config: Config) {
    console.log(config.localUrl);
  }
}
