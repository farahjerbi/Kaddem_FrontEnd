import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  readonly API_URL = 'http://localhost:8088/SpringMVC';
  constructor(private httpClient: HttpClient) { }
  GetAllOffre()
  {
      return this.httpClient.get(`${this.API_URL}/OffreC/`);
  }

AddOffre(Offre:any)
{

  return this.httpClient.post(`${this.API_URL}/OffreC/addOffre`,Offre)
}

editOffre(Offre:any)
{
  return this.httpClient.put(`${this.API_URL}/OffreC/updateOffre`,Offre)

}

deleteOffre(id : any)
{return this.httpClient.delete(`${this.API_URL}/OffreC/deleteOffre/${id}`)}



}
