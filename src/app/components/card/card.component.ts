import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CashData } from '../../models/cashData';
import { BuscaMoedaService } from '../../services/busca-moeda.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  moeda:CashData

  constructor(private service:BuscaMoedaService){
    this.moeda = {
      USDBRL:{
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
    this.getValue("USD-BRL")
  }
    getValue(searchName:string){
      this.service.getValue(searchName).subscribe({
        next: (res) => {

          this.moeda = {
            USDBRL:res.USDBRL
          }

          let float;
          let float0;

          float = parseFloat(this.moeda.USDBRL.bid);
          float = 1 / float
          float = float.toFixed(4)
          this.moeda.USDBRL.converte = float;
          
        },
        error : (err) => console.log('not found')
      })
    }
}
