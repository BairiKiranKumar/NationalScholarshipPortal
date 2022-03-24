import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubmitDetails } from '../submit-details';
import { SubmitDetailsService } from '../submit-details.service';

@Component({
  selector: 'app-submit-details',
  templateUrl: './submit-details.component.html',
  styleUrls: ['./submit-details.component.css']
})
export class SubmitDetailsComponent implements OnInit {

  optionValue:any;
  schemeValue:any;

  constructor(private myrouter:Router,private sub:SubmitDetailsService) { }
   
  ngOnInit(): void {
    
  }
 
  submitDetails:SubmitDetails = new SubmitDetails();
  saveSubmitDetails(submitDetailsForm:any){
    this.submitDetails=submitDetailsForm.value;
    console.log(submitDetailsForm.value);
    console.log(this.submitDetails);
    this.sub.addSubmitDetails(this.submitDetails).subscribe(
      (data)=>{
        console.log(data);
        console.log("Persisted");
        this.myrouter.navigate(['/Display']);
      },
      (error)=>{
         console.log(error)
      }
      )
   }
}
