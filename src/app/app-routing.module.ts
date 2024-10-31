import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageSelectionComponent } from './package-selection/package-selection.component';
import { FormComponent } from './form/form.component';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';

const routes: Routes = [
  { path: '', component: PackageSelectionComponent },
  { path: 'form', component: FormComponent  },
  {path: 'multi', component:MultiStepFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
