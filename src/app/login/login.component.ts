import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private formulario: FormBuilder, private bar: MatSnackBar){
    this.loginForm = this.formulario.group({
      correo: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }
  onLoginSubmit(){}
}
