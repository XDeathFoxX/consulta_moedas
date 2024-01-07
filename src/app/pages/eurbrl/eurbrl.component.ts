import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CashData } from '../../models/eurbrl';
import { BuscaMoedaService } from '../../services/busca-eurbrl';

@Component({
  selector: 'card-eurbrl',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eurbrl.component.html',
  styleUrl: './eurbrl.component.css'
})

export class eurbrlComponent implements OnInit {
  moeda:CashData

  constructor(private service:BuscaMoedaService){
    this.moeda = {
      EURBRL:{
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
  this.service.getValue("EUR-BRL").subscribe({
    next: (res) => {

      this.moeda = {
        EURBRL:res.EURBRL
      }

      let float;

      float = parseFloat(this.moeda.EURBRL.bid);
      float = 1 / float
      float = float.toFixed(4)
      this.moeda.EURBRL.converte = float;
      
    },
    error : (err) => console.log('not found')
  })
}
}
