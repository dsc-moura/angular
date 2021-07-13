import { Transferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: Transferencia[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpCliente: HttpClient) {
    this.listaTransferencias = [];
  }

  getAll(): Observable<Transferencia[]>{
    return this.httpCliente.get<Transferencia[]>(this.url);
  }

  get transferencias(){
    return this.listaTransferencias;
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia>{
    this.hidratar(transferencia);
    return this.httpCliente.post<Transferencia>(this.url, transferencia);
    //this.listaTransferencias.push(transferencia);
  }

  hidratar(transferencia: any){
    transferencia.data = new Date();
  }

}
