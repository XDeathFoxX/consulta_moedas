import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CashData } from '../../models/cadbrl';
import { BuscaMoedaService } from '../../services/busca-cadbrl.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cadbrl.component.html',
  styleUrl: './cadbrl.component.css'
})

export class cadbrlComponent implements OnInit {
  moeda:CashData

  constructor(private service:BuscaMoedaService){
    this.moeda = {
      CADBRL:{
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
  this.service.getValue("CAD-BRL").subscribe({
    next: (res) => {

      this.moeda = {
        CADBRL:res.CADBRL
      }

      let float;

      float = parseFloat(this.moeda.CADBRL.bid);
      float = 1 / float
      float = float.toFixed(4)
      this.moeda.CADBRL.converte = float;
      
    },
    error : (err) => console.log('not found')
  })
}
}
