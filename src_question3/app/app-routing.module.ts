import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookcompComponent } from './bookcomp/bookcomp.component';
import { TechcompComponent } from './techcomp/techcomp.component';
import { WildCompComponent } from './wild-comp/wild-comp.component';

const routes: Routes = [
  {path : 'Books', component : BookcompComponent},
  {path : 'Technology', component : TechcompComponent},
  {path : '', component : TechcompComponent},
  {path : '**', component : WildCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
