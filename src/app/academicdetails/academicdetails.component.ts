import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Academicdetails } from '../academicdetails';
import { AcademicdetailsService } from '../academicdetails.service';

@Component({
  selector: 'app-academicdetails',
  templateUrl: './academicdetails.component.html',
  styleUrls: ['./academicdetails.component.css']
})
export class AcademicDetailsComponent implements OnInit {
  
  

  constructor(private myrouter:Router,private aca:AcademicdetailsService) { }
  
 ngOnInit(): void {
   
 }
 academicDetails:Academicdetails= new Academicdetails();

 saveAcademicDetails(academicDetailsForm:any){
     this.academicDetails=academicDetailsForm.value;
     console.log(academicDetailsForm.value);
     console.log(this.academicDetails);
     this.aca.addAcademicDetails(this.academicDetails).subscribe(
       (data)=>{
         console.log(data);
         console.log("Persisted");
         this.myrouter.navigate(['/TenthDetails']);
       },
       (error)=>{
          console.log(error)
       }
       )
 }
}
