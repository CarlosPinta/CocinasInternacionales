import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import {ClientService} from '../../services/client.service';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  client:Client=
  {
    CODIGOCLIENTE: 0,
    NOMBRECLIENTE: '',
    APELLIDOCLIENTE:'',
    IDENTIFICACIONCLIENTE:'',
    TELEFONO1CLIENTE:'',
    TELEFONO2CLIENTE:'',
    DIRECCIONCLIENTE:'',
    EMAILCLIENTE:'',
    FECHACLIENTECREACION: new Date()
  }
  edit :boolean=false;
  constructor(private clientService:ClientService, private router:Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params=this.activateRoute.snapshot.params;
    if(params.id)
    {
      this.clientService.getClient(params.id).subscribe(
        res=>{
          console.log(res);
          this.client=res;
          this.edit=true;
        },
        err=>console.error(err)
      )
    }
  }
  saveNewClient(){
    delete this.client.FECHACLIENTECREACION;
    delete this.client.CODIGOCLIENTE;
    this.clientService.saveClient(this.client).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/clients']);
      },
      err=>console.error(err)
    )
  }

  updateClient(){
    delete this.client.FECHACLIENTECREACION;
    this.clientService.updateClient(this.client.CODIGOCLIENTE!,this.client).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/clients']);
      },
      err=>console.error(err)
    )
  }
}
