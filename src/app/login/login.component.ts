import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private formulario: FormBuilder, private bar: MatSnackBar, private _router:Router){
    this.loginForm = this.formulario.group({
      correo: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }
  onLoginSubmit(){
    console.log(this.loginForm.value)
    if(this.loginForm.valid){
      this._router.navigate(['usuarios'])
    }
  }
}
