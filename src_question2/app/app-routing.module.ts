import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookcompComponent } from './bookcomp/bookcomp.component';
import { TechcompComponent } from './techcomp/techcomp.component';

const routes: Routes = [
  {path : 'Books', component : BookcompComponent},
  {path : 'Technology', component : TechcompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
