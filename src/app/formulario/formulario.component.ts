import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
interface Roles{
  rol:string;
}
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  form: FormGroup;
  constructor(private formulario: FormBuilder, private bar: MatSnackBar){
    this.form = this.formulario.group({
      nombre: ['',[Validators.required]],
      apellidos: ['',[Validators.required]],
      correo: ['',[Validators.required]],
      password: ['',[Validators.required]],
      rol: ['']
    });
  }
  onSubmit(){

  }
  roles: Roles[] = [
    {rol: "Cliente"}
  ]
}
