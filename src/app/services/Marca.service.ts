import { Marca } from './../models/marca.models';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class MarcaService{
  private listaMarcas: Marca[];
  private url = 'http://localhost:8080/api/v1/carros';

  constructor(private httpCliente: HttpClient) {
    this.listaMarcas = [];
  }

  getAll(): Observable<Marca[]>{
    return this.httpCliente.get<Marca[]>(this.url);
  }

  get transferencias(){
    return this.listaMarcas;
  }
}
