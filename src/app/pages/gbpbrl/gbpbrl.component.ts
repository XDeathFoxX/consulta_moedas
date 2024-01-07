import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CashData } from '../../models/gbpbrl';
import { BuscaMoedaService } from '../../services/busca-gbpbrl.service';

@Component({
  selector: 'card-gbpbrl',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gbpbrl.component.html',
  styleUrl: './gbpbrl.component.css'
})

export class gbpbrlComponent implements OnInit {
  moeda:CashData

  constructor(private service:BuscaMoedaService){
    this.moeda = {
      GBPBRL:{
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
  this.service.getValue("GBP-BRL").subscribe({
    next: (res) => {

      this.moeda = {
        GBPBRL:res.GBPBRL
      }

      let float;

      float = parseFloat(this.moeda.GBPBRL.bid);
      float = 1 / float
      float = float.toFixed(4)
      this.moeda.GBPBRL.converte = float;
      
    },
    error : (err) => console.log('not found')
  })
}
}