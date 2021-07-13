import { ExtratoContabilComponent } from './extrato-contabil/extrato-contabil.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";


import { Routes } from '@angular/router';
import { EsquemaContabilComponent } from './esquema-contabil/esquema-contabil.component';

export const routes: Routes = [
  {path: '', redirectTo: 'extrato-contabil', pathMatch: 'full' },
  {path: 'extrato-contabil', component: ExtratoContabilComponent },
  {path: 'esquema-contabil', component: EsquemaContabilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule
{

}
