import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ServicioService } from '../servicio.service';

interface Roles{
  rol:string;
}

interface users{
  id: number;
  nombre: string;
  apellidos: string;
  correo: string;
  rol: string;
}

@Component({
  selector: 'app-dialogo-editar',
  templateUrl: './dialogo-editar.component.html',
  styleUrls: ['./dialogo-editar.component.css']
})

export class DialogoEditarComponent {

  form:FormGroup;

  roles: Roles[] = [
    {rol: "Cliente"},
    {rol: "Administrador"}
  ]

  constructor(public dialogRef: MatDialogRef<DialogoEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: users,
    private _apiService:ServicioService,
    private _formBuilder:FormBuilder) {
      this.form = this._formBuilder.group({
        id: [data.id],
        nombre: [data.nombre],
        apellidos: [data.apellidos],
        correo: [data.correo],
        rol: [data.rol]
      })
    }

    onSubmit() {
      if (this.form.valid) {
        this._apiService.updateDataFormulario(this.data.id, this.form.value).subscribe(res=>{(console.log(res))}); 
      } 
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
}
