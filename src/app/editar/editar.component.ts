import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicioService } from '../servicio.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  id:string,
  nombre:string,
  apellidos: string,
  correo: string,
  password:string,
  rol: string
}
interface Roles{
  rol:string;
}
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  form: FormGroup;
  constructor(private formulario: FormBuilder, private bar: MatSnackBar, private api:ServicioService, public dialogRef: MatDialogRef<EditarComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData){
    this.form = this.formulario.group({
      id: [data.id],
      nombre: [data.nombre],
      apellidos: [data.apellidos],
      correo: [data.correo],
      password: [data.password],
      rol: [data.rol]
    });
  }
  onSubmit(){
    if(this.form.valid){
      this.api.updateDataFormulario(this.data.id,this.form.value).subscribe();
      this.bar.open("Actualizado Correctamente","cerrar",{
        duration: 1000
      });
      window.location.reload();
    }
    else{
      this.bar.open("Formulario Incompleto","cerrar",{
        duration:2000
      });
    }
  }
  roles: Roles[] = [
    {rol: "Cliente"},
    {rol: "Empleado"},
    {rol: "Administrador"}
  ]
}
