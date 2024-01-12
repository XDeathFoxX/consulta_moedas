import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CashData } from '../../models/ethbrl';
import { BuscaMoedaService } from '../../services/busca-ethbrl.service';

@Component({
  selector: 'card-ethbrl',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ethbrl.component.html',
  styleUrl: './ethbrl.component.css'
})

export class ethbrlComponent implements OnInit {
  moeda:CashData

  constructor(private service:BuscaMoedaService){
    this.moeda = {
      ETHBRL:{
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
    this.service.getValue("ETH-BRL").subscribe({
      next: (res) => {
  
        this.moeda = {
          ETHBRL:res.ETHBRL
        }
  
        let float;
  
        float = parseFloat(this.moeda.ETHBRL.bid);
        float = 1 / float
        float = float.toFixed(4)
        this.moeda.ETHBRL.converte = float;
        
      },
      error : (err) => console.log('not found')
    })
  }
}
