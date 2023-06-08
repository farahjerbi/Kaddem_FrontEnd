import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  readonly API_URL = 'http://localhost:8088/SpringMVC';

  constructor(private httpClient: HttpClient) { }

  GetAllContact()
  {
      return this.httpClient.get(`${this.API_URL}/ContratC/`);
  }

AddContact(Contrat:any)
{

  return this.httpClient.post(`${this.API_URL}/ContratC/addContrat`,Contrat)
}

editContact(Contrat:any)
{
  return this.httpClient.put(`${this.API_URL}/ContratC/updateContrat`,Contrat)

}

deleteContact(id : any)
{return this.httpClient.delete(`${this.API_URL}/ContratC/deleteContrat/${id}`)}





}
