import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  readonly API_URL = 'http://localhost:8098/SpringMVC';

  constructor(private httpClient: HttpClient) { }



  GetAllDepartement()
  {
      return this.httpClient.get(`${this.API_URL}/DepartementC/`);
  }


  AddDepartement(depa:any)
  {
  
    return this.httpClient.post(`${this.API_URL}/DepartementC/addDepartement`,depa)
  }



  editDepartement(depar:any)
{
  return this.httpClient.put(`${this.API_URL}/DepartementC/updateDepartement`,depar)

}

deleteDepartement(idd : any)
{return this.httpClient.delete(`${this.API_URL}/DepartementC/deleteDepartement/${idd}`)}














}
