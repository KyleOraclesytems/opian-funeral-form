import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PackageSelectionComponent } from './package-selection/package-selection.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule } from '@angular/forms';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { SpouseDetailsComponent } from './spouse-details/spouse-details.component';
import { EmploymentDetailsComponent } from './employment-details/employment-details.component';
import { BankingDetailsComponent } from './banking-details/banking-details.component';
import { AffordabilityDetailsComponent } from './affordability-details/affordability-details.component';
import { SubmitDocumentsComponent } from './submit-documents/submit-documents.component';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';
import { MdetailsComponent } from './mdetails/mdetails.component';
import { SdetailsComponent } from './sdetails/sdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PackageSelectionComponent,
    FooterComponent,
    FormComponent,
    LoaderComponent,
    MemberDetailsComponent,
    SpouseDetailsComponent,
    EmploymentDetailsComponent,
    BankingDetailsComponent,
    AffordabilityDetailsComponent,
    SubmitDocumentsComponent,
    MultiStepFormComponent,
    MdetailsComponent,
    SdetailsComponent
  ],
  imports: [
    FormsModule,   
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
