import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @Output() nombre = new EventEmitter<any>();
  loginForm: FormGroup;
  constructor(private formulario: FormBuilder, private bar: MatSnackBar, private router:Router, private api:ServicioService){
    this.loginForm = this.formulario.group({
      correo: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }
  ngOnInit(): void {
    this.api.getDataFormulario().subscribe((res=>{
      this.lista=res;
    }));
  }
  onLoginSubmit(){let bandera = false;
    if(this.loginForm.valid){
      for(let i = 0; i < this.lista.length; i++){
        if(this.correo == this.lista[i].correo 
          && this.password == this.lista[i].password
        ){
          console.log("Login correcto");
          this.nombre.emit(this.lista[i].nombre);
          this.router.navigate(['lista']);
          bandera = true;
        }
      }
      if(!bandera){
        alert("La contraseña y/o el correo son incorrectos");
      }
    }
  }
  lista:any[] = [];
  correo:string;
  password:string;
}
