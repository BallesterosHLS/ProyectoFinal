import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicioService } from '../servicio.service';
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
  constructor(private formulario: FormBuilder, private bar: MatSnackBar, private api:ServicioService, private router:Router){
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
      this.api.sendDataFormulario(this.form.value).subscribe();
      this.bar.open("Agregado Correctamente","cerrar");
      this.router.navigate(['lista']);
    }
    else{
      this.bar.open("Faltan datos","cerrar",{
        duration:5000
      });
    }
  }
  roles: Roles[] = [
    {rol: "Cliente"},
    {rol: "Empleado"}
  ]
}
