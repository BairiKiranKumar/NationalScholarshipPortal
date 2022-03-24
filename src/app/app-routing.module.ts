import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { InstitutionhomeComponent } from './institutionhome/institutionhome.component';
import { InstitutionloginComponent } from './institutionlogin/institutionlogin.component';
import { InstitutionregistrationComponent } from './institutionregistration/institutionregistration.component';
//import { ApplyingforschemesComponent } from './applyingforschemes/applyingforschemes.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AcademicDetailsComponent } from './academicdetails/academicdetails.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { DisplayComponent } from './display/display.component';
import { FeeDetailsComponent } from './fee-details/fee-details.component';
import { OtherDetailsComponent } from './other-details/other-details.component';
import { SubmitDetailsComponent } from './submit-details/submit-details.component';
import { TenthDetails } from './tenth-details';
import { TenthDetailsComponent } from './tenth-details/tenth-details.component';
import { TwelthDetailsComponent } from './twelth-details/twelth-details.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'studentlogin',component:StudentloginComponent},
  {path:'studenthome',component:StudenthomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'institutionhome',component:InstitutionhomeComponent},
  {path:'institutionlogin',component:InstitutionloginComponent},
  {path:'institutionregistration',component:InstitutionregistrationComponent},
  //{path:'applyingforschemes',component:ApplyingforschemesComponent},
  {path:'studentregistration',component:StudentregistrationComponent},
  {path:'AcademicDetails',component:AcademicDetailsComponent},
  {path:'BasicDetails',component:BasicDetailsComponent},
  {path:'ContactDetails',component:ContactDetailsComponent},
  {path:'Display',component:DisplayComponent},
  {path:'FeeDetails',component:FeeDetailsComponent},
  {path:'OtherDetails',component:OtherDetailsComponent},
  {path:'SubmitDetails',component:SubmitDetailsComponent},
  {path:'TenthDetails',component:TenthDetailsComponent},
  {path:'TwelthDetails',component:TwelthDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
