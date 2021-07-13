import { MatPaginator } from '@angular/material/paginator';
import { MarcaService } from './../services/Marca.service';
import { Transferencia } from './../models/transferencia.model';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable  } from '@angular/material/table';
import { TransferenciaService } from '../services/Transferencia.service';
import { Marca } from '../models/marca.models';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-extrato-contabil',
  templateUrl: './extrato-contabil.component.html',
  styleUrls: ['./extrato-contabil.component.css']
})

export class ExtratoContabilComponent implements  OnInit{

  //dataSource: Transferencia [];

  dataSource = new MatTableDataSource<Marca>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private service: MarcaService) { }

 /*  constructor(private service: TransferenciaService) {
    this.dataSource = [];
  } */

  //displayedColumns: string[] = ['data', 'destino','valor'];
  displayedColumns: string[] = ['id', 'nome'];


  ngOnInit() {
   /*  this.service.getAll().subscribe((dataSource: Transferencia[]) =>{
      console.table(dataSource);
      this.dataSource = dataSource;
    }); */

  this.service.getAll().subscribe((dataSource: Marca[]) =>{
      console.table(dataSource);
      this.dataSource = new MatTableDataSource<Marca>(dataSource);
      this.dataSource.paginator = this.paginator;
    });
   }
}
