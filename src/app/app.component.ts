import { Component } from '@angular/core';
import { TransferenciaService } from './services/Transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exemplo-projeto';
    /**
    *
    */
   constructor(private service: TransferenciaService) {}

}
