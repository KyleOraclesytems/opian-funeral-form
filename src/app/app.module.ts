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
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PackageSelectionComponent,
    FooterComponent,
    FormComponent,
    LoaderComponent
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
