import { Component } from '@angular/core';
import { NgsRevealConfig } from 'ngx-scrollreveal';

@Component({
  selector: 'app-root',
  template: '<router-outlet> </router-outlet>',
  styleUrls: ['./app.component.css'],
  providers: [NgsRevealConfig]
})
export class AppComponent {
  title = 'e-ticaret';
}
