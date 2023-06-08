import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {


  readonly API_URL = 'http://localhost:8088/SpringMVC';

  constructor(private httpClient: HttpClient) { }

  GetAllequipe()
  {
      return this.httpClient.get(`${this.API_URL}/EquipeC/`);
  }

Addequipe(equipe:any)
{

  return this.httpClient.post(`${this.API_URL}/EquipeC/addEquipe`,equipe)
}

editequipe(equipe:any)
{
  return this.httpClient.put(`${this.API_URL}/EquipeC/updateEquipe`,equipe)

}

deleteequipe(id : any)
{return this.httpClient.delete(`${this.API_URL}/EquipeC/deleteEquipe/${id}`)}



}
