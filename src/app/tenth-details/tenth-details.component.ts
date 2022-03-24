import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TenthDetails } from '../tenth-details';
import { TenthDetailsService } from '../tenth-details.service';

@Component({
  selector: 'app-tenth-details',
  templateUrl: './tenth-details.component.html',
  styleUrls: ['./tenth-details.component.css']
})
export class TenthDetailsComponent implements OnInit {

  eligiblity:string='';

  constructor(private myrouter:Router,private ten:TenthDetailsService) {
    //this.eligiblity=basic.
   }

  ngOnInit(): void {
  }
  tenthDetails:TenthDetails = new TenthDetails();
  saveTenthDetails(tenthDetailsForm:any){
    this.tenthDetails=tenthDetailsForm.value;
    console.log(tenthDetailsForm.value);
    console.log(this.tenthDetails);
    this.ten.addTenthDetails(this.tenthDetails).subscribe(
      (data)=>{
        console.log(data);
        console.log("Persisted");
        this.myrouter.navigate(['/TwelthDetails']);
      },
      (error)=>{
         console.log(error)
      }
      )
   }

}
