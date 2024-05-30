import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { EditarComponent } from './editar/editar.component';
import { ErrorComponent } from './error/error.component';
const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"formulario", component: FormularioComponent},
  {path:"editar", component: EditarComponent},
  {path:"lista", component: ListaUsuariosComponent},
  {path: "**",component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
