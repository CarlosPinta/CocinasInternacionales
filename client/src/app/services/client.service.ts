import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { threadId } from 'worker_threads';
import {Client} from '../models/client';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  API_URI='http://localhost:3000';
  constructor(private http: HttpClient) { 
    
  }

  getClients(){
    return this.http.get(`${this.API_URI}/clients/`);
  }

  getClient(id: string){
    return this.http.get(`${this.API_URI}/clients/${id}`);
  }

  saveClient(cliente: Client){
    return this.http.post(`${this.API_URI}/clients/`,cliente);
  }

  deleteClient(id:string)
  {
    return this.http.delete(`${this.API_URI}/clients/${id}`);
  }

  updateClient(id:number,updatedClient:Client):Observable<Client>
  {
    return this.http.put(`${this.API_URI}/clients/${id}`,updatedClient);
  }

}
