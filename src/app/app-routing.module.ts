import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './formulario/formulario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"formulario", component: FormularioComponent},
  {path:"usuarios", component:UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
