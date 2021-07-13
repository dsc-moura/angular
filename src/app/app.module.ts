import { AppRoutingModule } from './app-routing.module';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import localePt from '@angular/common/locales/pt'; // para conseguir formatar datas em BR
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { EsquemaContabilComponent } from './esquema-contabil/esquema-contabil.component';
import { ExtratoContabilComponent } from './extrato-contabil/extrato-contabil.component';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SideNavComponent } from './side-nav/side-nav.component';

registerLocaleData(localePt,'pt'); // para conseguir formatar datas em BR

@NgModule({
  declarations: [
    AppComponent,
    EsquemaContabilComponent,
    ExtratoContabilComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatSliderModule,
    MatSidenavModule,
    MatMenuModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}, // para conseguir formatar datas em BR
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'} // para conseguir formatar moedas em BR
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
