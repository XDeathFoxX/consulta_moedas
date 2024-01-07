import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CashData } from '../models/ltcbrl'

@Injectable({
  providedIn: 'root'
})
export class BuscaMoedaService {

  private baseUrl:string = "https://economia.awesomeapi.com.br/json/last/"


  constructor(private httpClient:HttpClient) {}
  private cashData: CashData | any

  getValue(moedas:string):Observable<CashData>{
    this.cashData = this.httpClient.get<CashData>(`${this.baseUrl}${moedas}`)
    
    return this.cashData
  }
}
