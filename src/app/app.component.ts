import { Component } from '@angular/core';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loginService:LoginServiceService){}
  title = 'Proyecto';
  login:any;
  log(){
    return this.loginService.estaLogueado()
  }
  logOut(){
    return this.loginService.logOut();
  }
  nombre(event:Event){
    this.login = event
  }
}
