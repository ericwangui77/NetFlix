import { Component } from '@angular/core';
import {FilmdDateService} from './Service/filmdata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FilmdDateService],
})
export class AppComponent {
  title = 'app';
}
