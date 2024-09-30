import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageSelectionComponent } from './package-selection/package-selection.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: PackageSelectionComponent },
  { path: 'form', component: FormComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
