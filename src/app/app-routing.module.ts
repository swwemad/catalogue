import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, //muestra una lista con las familias del catálogo
  { path: 'list/:id', component: ListComponent }, //muestra la lista de una familia del catálogo según {id} de la familia
  { path: 'item/:id', component: ItemComponent }, //muestra un objeto del catálogo según {id} del objeto
  { path: '**', redirectTo: '', pathMatch: 'full'  },      //ruta por defecto, redirige a home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
