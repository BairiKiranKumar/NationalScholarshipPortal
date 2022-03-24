import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeeDetails } from '../fee-details';
import { FeeDetailsService } from '../fee-details.service';

@Component({
  selector: 'app-fee-details',
  templateUrl: './fee-details.component.html',
  styleUrls: ['./fee-details.component.css']
})
export class FeeDetailsComponent implements OnInit {

  constructor(private myrouter:Router,private fee:FeeDetailsService) { }

  ngOnInit(): void {
  }
  feeDetails:FeeDetails = new FeeDetails();
  saveFeeDetails(feeDetailsForm:any){
    this.feeDetails=feeDetailsForm.value;
    console.log(feeDetailsForm.value);
    console.log(this.feeDetails);
    this.fee.addFeeDetails(this.feeDetails).subscribe(
      (data)=>{
        console.log(data);
        console.log("Persisted");
        this.myrouter.navigate(['/OtherDetails']);
      },
      (error)=>{
         console.log(error)
      }
      )
   }

}
