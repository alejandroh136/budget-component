import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
const routes: Routes = [
  {path:'', component:BudgetListComponent},
  {path:'template', component: TemplateComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
