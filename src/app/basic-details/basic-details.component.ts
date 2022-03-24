import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicDetails } from '../basic-details';
import { BasicDetailsService } from '../basic-details.service';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent implements OnInit {

  constructor(private myrouter:Router,private bas:BasicDetailsService) { }

  ngOnInit(): void {
  }
  basicDetails:BasicDetails = new BasicDetails();

   saveBasicDetails(basicDetailsForm:any){
    this.basicDetails=basicDetailsForm.value;
    console.log(basicDetailsForm.value);
    console.log(this.basicDetails);
    this.bas.addBasicDetails(this.basicDetails).subscribe(
      (data)=>{
        console.log(data);
        console.log("Persisted");
        this.myrouter.navigate(['/AcademicDetails']);
      },
      (error)=>{
         console.log(error)
      }
      )
   }
}
