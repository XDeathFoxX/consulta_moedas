import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CashData } from '../../models/dogebrl';
import { BuscaMoedaService } from '../../services/busca-dogebrl.service';

@Component({
  selector: 'card-dogebrl',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dogebrl.component.html',
  styleUrl: './dogebrl.component.css'
})

export class dogebrlComponent implements OnInit {
  moeda:CashData

  constructor(private service:BuscaMoedaService){
    this.moeda = {
      DOGEBRL:{
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
    this.service.getValue("DOGE-BRL").subscribe({
      next: (res) => {
  
        this.moeda = {
          DOGEBRL:res.DOGEBRL
        }
  
        let float;
  
        float = parseFloat(this.moeda.DOGEBRL.bid);
        float = 1 / float
        float = float.toFixed(4)
        this.moeda.DOGEBRL.converte = float;
        
      },
      error : (err) => console.log('not found')
    })
  }
}
