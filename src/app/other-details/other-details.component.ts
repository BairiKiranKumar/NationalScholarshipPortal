import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OtherDetails } from '../other-details';
import { OtherDetailsService } from '../other-details.service';

@Component({
  selector: 'app-other-details',
  templateUrl: './other-details.component.html',
  styleUrls: ['./other-details.component.css']
})
export class OtherDetailsComponent implements OnInit {

  constructor(private myrouter:Router,private oth:OtherDetailsService) { }

  ngOnInit(): void {
  }
  otherDetails:OtherDetails = new OtherDetails();
  saveOtherDetails(otherDetailsForm:any){
    this.otherDetails=otherDetailsForm.value;
    console.log(otherDetailsForm.value);
    console.log(this.otherDetails);
    this.oth.addOtherDetails(this.otherDetails).subscribe(
      (data)=>{
        console.log(data);
        console.log("Persisted");
        this.myrouter.navigate(['/ContactDetails']);
      },
      (error)=>{
         console.log(error)
      }
      )
   }

}
