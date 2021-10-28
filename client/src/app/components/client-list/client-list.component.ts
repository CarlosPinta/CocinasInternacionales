import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../services/client.service";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: any=[];
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient()
  {
    this.clientService.getClients().subscribe(
      res=>{
        this.clients=res;
      },
      err =>console.error(err)
    );
  }

  deleteClient(id:string){
    this.clientService.deleteClient(id).subscribe(
      res=>{
        console.log(res);
        this.getClient();
      },
      err=>console.error(err)
    )
  }


}