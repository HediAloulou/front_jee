import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http: HttpClient) { }

  public afficher_clients(): Observable<Client[]> {
    return this.http.get<Client[]>("http://localhost:8080/banque_client/clients");
  }

  public addClient(client: Client): Observable<Client> {
    return this.http.post<Client>("http://localhost:8080/banque_client/clients", client);
  }
  
  public deleteClient(client: Client): Observable<any> {
    const url = `http://localhost:8080/banque_client/"/supprimer/${client.id}`;
    return this.http.delete(url);
  }
}