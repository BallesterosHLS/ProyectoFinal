import { Injectable } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private router:Router) { }
  estaLogueadoB = false;
  login(loginForm:FormGroup, lista:any){
    let bandera = false;
    if(loginForm.valid){
      for(let i = 0; i < lista.length; i++){
        if(loginForm.value.correo == lista[i].correo 
          && loginForm.value.password == lista[i].password
        ){
          console.log("Login correcto");
          this.estaLogueadoB = true;
          return bandera = true;
        }
      }
    }
    return bandera;
  }
  estaLogueado(){
    return this.estaLogueadoB;
  }
  logOut(){
    this.estaLogueadoB = false;
    this.router.navigate(['/'])
  }
}
