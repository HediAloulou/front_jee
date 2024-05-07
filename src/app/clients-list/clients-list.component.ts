import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { ClientServiceService } from '../service/client-service.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css'] 
})
export class ClientsListComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientServiceService) {} 

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientService.afficher_clients().subscribe(data => { 
      this.clients = data;
    });
  }

  deleteClient(client: Client) {
    if (confirm('Are you sure you want to delete this client?')) {
      this.clientService.deleteClient(client).subscribe(() => {
        // Remove the client from the array
        this.clients = this.clients.filter(c => c !== client);
      });
    }
  }
}
