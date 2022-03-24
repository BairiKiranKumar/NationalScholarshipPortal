import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactDetails } from '../contact-details';
import { ContactDetailsService } from '../contact-details.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  selectedValue:any;
  constructor(private myrouter:Router,private con:ContactDetailsService) { }
 

  ngOnInit(): void {
  }
  contactDetails:ContactDetails = new ContactDetails();
  saveContactDetails(contactDetailsForm:any){
    this.contactDetails=contactDetailsForm.value;
    console.log(contactDetailsForm.value);
    console.log(this.contactDetails);
    this.con.addContactDetails(this.contactDetails).subscribe(
      (data)=>{
        console.log(data);
        console.log("Persisted");
        this.myrouter.navigate(['/SubmitDetails']);
      },
      (error)=>{
         console.log(error)
      }
      )
   }

}
