import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Institution } from './institution';

@Injectable({
  providedIn: 'root'
})
export class InstitutionregistrationService {

  response:any;
  constructor(private myhttp:HttpClient) { }
restURL:string="http://localhost:9099/NationalScolarshipPortal/Institution";
getInstitution()
{
  return this.myhttp.get(this.restURL+"/InstitutionRegistration")
}
addInstitution(add:Institution)
{
  return this.myhttp.post(this.restURL+"/InstitutionRegistration",add)
}
}