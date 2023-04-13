import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { ServiceComponent } from './students/service/service.component';

const routes: Routes = [
  {
    path:'',
    component:ServiceComponent
  },
  {
    path:'students',
    component:StudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
