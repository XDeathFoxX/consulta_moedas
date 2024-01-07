import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CashData } from '../../models/ethusd';
import { BuscaMoedaService } from '../../services/busca-ethusd.service';

@Component({
  selector: 'card-ethusd',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ethusd.component.html',
  styleUrl: './ethusd.component.css'
})

export class ethusdComponent implements OnInit {
  moeda:CashData

  constructor(private service:BuscaMoedaService){
    this.moeda = {
      ETHUSD:{
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
    this.service.getValue("ETH-USD").subscribe({
      next: (res) => {
  
        this.moeda = {
          ETHUSD:res.ETHUSD
        }
  
        let float;
  
        float = parseFloat(this.moeda.ETHUSD.bid);
        float = 1 / float
        float = float.toFixed(4)
        this.moeda.ETHUSD.converte = float;
        
      },
      error : (err) => console.log('not found')
    })
  }
}
