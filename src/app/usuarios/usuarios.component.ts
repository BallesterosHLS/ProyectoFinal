import { Component, Inject, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { DialogoEditarComponent } from '../dialogo-editar/dialogo-editar.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  dataSource:any[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'correo', 'rol', 'edit', 'delete'];

  constructor(private _apiService:ServicioService,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
    this._apiService.getDataFormulario().subscribe((res=>{
      this.dataSource = res;
    }))
  }

  deleteUsuario(row:any){
    this._apiService.deleteDataFormulario(row.id).subscribe((res=>{}))
  }

  openDialog(row:any): void {
    const dialogRef = this.dialog.open(DialogoEditarComponent, {
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
