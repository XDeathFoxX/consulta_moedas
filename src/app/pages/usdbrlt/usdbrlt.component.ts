import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CashData } from '../../models/usdbrlt';
import { BuscaMoedaService } from '../../services/busca-usdbrlt.service';

@Component({
  selector: 'card-eurbrl',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usdbrlt.component.html',
  styleUrl: './usdbrlt.component.css'
})

export class usdbrltComponent implements OnInit {
  moeda:CashData

  constructor(private service:BuscaMoedaService){
    this.moeda = {
      USDBRLT:{
          code: '',
          codein: '',
          name:'',
          high:'',
          low:'',
          bid:'',
          create_date:'',
          converte:''
    }}
  }

  ngOnInit(): void {
  }

  getValue(){
  this.service.getValue("USD-BRLT").subscribe({
    next: (res) => {

      this.moeda = {
        USDBRLT:res.USDBRLT
      }

      let float;

      float = parseFloat(this.moeda.USDBRLT.bid);
      float = 1 / float
      float = float.toFixed(4)
      this.moeda.USDBRLT.converte = float;
      
    },
    error : (err) => console.log('not found')
  })
}
}
