import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @Output() nombre = new EventEmitter<any>();
  loginForm: FormGroup;
  constructor(private formulario: FormBuilder, private bar: MatSnackBar, private router:Router, private api:ServicioService, private loginService:LoginServiceService){
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
  onLoginSubmit(){
    if(this.loginService.login(this.loginForm, this.lista))
      {
        this.router.navigate(['lista']);
      }
    else{
      alert("Usuario y/o contraseña incorrectos")
    }
  }
  lista:any[] = [];
}
