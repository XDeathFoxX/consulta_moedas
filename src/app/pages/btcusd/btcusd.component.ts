import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CashData } from '../../models/btcusd';
import { BuscaMoedaService } from '../../services/busca-btcusd.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btcusd.component.html',
  styleUrl: './btcusd.component.css'
})

export class btcusdComponent implements OnInit {
  moeda:CashData

  constructor(private service:BuscaMoedaService){
    this.moeda = {
      BTCUSD:{
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
  this.service.getValue("BTC-USD").subscribe({
    next: (res) => {

      this.moeda = {
        BTCUSD:res.BTCUSD
      }

      let float;

      float = parseFloat(this.moeda.BTCUSD.bid);
      float = 1 / float
      float = float.toFixed(4)
      this.moeda.BTCUSD.converte = float;
      
    },
    error : (err) => console.log('not found')
  })
}
}
