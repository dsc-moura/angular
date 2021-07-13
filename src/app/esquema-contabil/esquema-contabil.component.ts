import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/Transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-esquema-contabil',
  templateUrl: './esquema-contabil.component.html',
  styleUrls: ['./esquema-contabil.component.css']
})

export class EsquemaContabilComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  /**
   *
   */
  constructor(private service: TransferenciaService, private router: Router) { }

  transferencia() {
    console.log('Transferencia Solicitada');

    const valorEmitter: Transferencia = { valor: this.valor, destino: this.destino };
    this.service.adicionar(valorEmitter).subscribe((resultado) => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato-contabil');  

    },
      (error) => console.error(error));
  }

  limparCampos() {
    this.destino = 0;
    this.valor = 0;
  }

}
