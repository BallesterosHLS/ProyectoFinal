import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicioService } from '../servicio.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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
  constructor(private formulario: FormBuilder, 
    private bar: MatSnackBar, 
    private _apiService:ServicioService,
    private _router:Router
  )
    {
    this.form = this.formulario.group({
      nombre: ['',[Validators.required]],
      apellidos: ['',[Validators.required]],
      correo: ['',[Validators.required]],
      password: ['',[Validators.required]],
      rol: ['']
    });
  }

  onSubmit(){
    if(this.form.valid){
      this._apiService.sendDataFormulario(this.form.value).subscribe((res=>{
      }))
      window.location.reload()
    }
  }
  roles: Roles[] = [
    {rol: "Cliente"}
  ]
}
