import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDataComponent } from './form-data/form-data.component';
import { ShowDataComponent } from './show-data/show-data.component';




const routes: Routes = [
  {
      path:'', component:FormDataComponent
  },
  {
    path: 'show', component: ShowDataComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
