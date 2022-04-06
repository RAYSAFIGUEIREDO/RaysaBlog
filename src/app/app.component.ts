import { Component } from '@angular/core';
import { AuthServicce } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
public auth: AuthServicce
  ){} 
}
