import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { ApplyingforschemesComponent } from './applyingforschemes/applyingforschemes.component';
import { InstitutionregistrationComponent } from './institutionregistration/institutionregistration.component';
import { InstitutionloginComponent } from './institutionlogin/institutionlogin.component';
import { InstitutionhomeComponent } from './institutionhome/institutionhome.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AcademicDetailsComponent } from './academicdetails/academicdetails.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { DisplayComponent } from './display/display.component';
import { FeeDetailsComponent } from './fee-details/fee-details.component';
import { OtherDetailsComponent } from './other-details/other-details.component';
import { SubmitDetailsComponent } from './submit-details/submit-details.component';
import { TenthDetailsComponent } from './tenth-details/tenth-details.component';
import { TwelthDetailsComponent } from './twelth-details/twelth-details.component'
@NgModule({
  declarations: [
    AppComponent,
    StudentloginComponent,
    StudenthomeComponent,
    HomeComponent,
    AdminloginComponent,
    AdminhomeComponent,
    StudentregistrationComponent,
    ApplyingforschemesComponent,
    InstitutionregistrationComponent,
    InstitutionloginComponent,
    InstitutionhomeComponent,
    ContactComponent,
    AboutComponent,
    AcademicDetailsComponent,
    BasicDetailsComponent,
    ContactDetailsComponent,
    DisplayComponent,
    FeeDetailsComponent,
    OtherDetailsComponent,
    SubmitDetailsComponent,
    TenthDetailsComponent,
    TwelthDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
