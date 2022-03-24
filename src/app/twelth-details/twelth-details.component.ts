import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TwelthDetails } from '../twelth-details';
import { TwelthDetailsService } from '../twelth-details.service';

@Component({
  selector: 'app-twelth-details',
  templateUrl: './twelth-details.component.html',
  styleUrls: ['./twelth-details.component.css']
})
export class TwelthDetailsComponent implements OnInit {

  constructor(private myrouter:Router, private twe:TwelthDetailsService) { }

  ngOnInit(): void {
  }
  twelthDetails:TwelthDetails=new TwelthDetails();
  saveTwelthDetails(twelthDetailsForm:any){
    this.twelthDetails=twelthDetailsForm.value;
    console.log(twelthDetailsForm.value);
    console.log(this.twelthDetails);
    this.twe.addTwelthDetails(this.twelthDetails).subscribe(
      (data)=>{
        console.log(data);
        console.log("Persisted");
        this.myrouter.navigate(['/FeeDetails']);
      },
      (error)=>{
         console.log(error)
      }
      )
   }
}
