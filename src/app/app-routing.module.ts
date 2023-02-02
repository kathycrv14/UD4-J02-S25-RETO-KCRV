import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { CandesactivateGuard } from './candesactivate.guard';
import { BusquedaComponent } from './principal/busqueda/busqueda.component';
import { FormularioComponent } from './principal/formulario/formulario.component';
import { LoginComponent } from './principal/login/login.component';
import { MensajeComponent } from './principal/mensaje/mensaje.component';
import { OperacionComponent } from './principal/operacion/operacion.component';
import { VistaComponent } from './principal/vista/vista.component';

const routes: Routes = [
  {path: 'vista', component: VistaComponent, canActivate: [CanactivateGuard]},
  {path: 'formulario', component: FormularioComponent, canActivate: [CanactivateGuard]},
  {path: 'busqueda', component: BusquedaComponent, canActivate: [CanactivateGuard]},

  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},

  {path: 'mensaje', component: MensajeComponent, canActivate: [CanactivateGuard], canDeactivate: [CandesactivateGuard]},

  {path: 'operacion', component: OperacionComponent, canActivate: [CanactivateGuard], canDeactivate: [CandesactivateGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
