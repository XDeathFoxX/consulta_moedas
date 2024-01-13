import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CashData } from '../../models/btcbrl';
import { BuscaMoedaService } from '../../services/busca-btcbrl.service';

@Component({
  selector: 'card-btcbrl',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btcbrl.component.html',
  styleUrl: './btcbrl.component.css'
})

export class btcbrlComponent implements OnInit {
  @ViewChild('myInput') myInput:ElementRef | any
  moeda:CashData;
  @Input()
  valorconvertido!: String;

  constructor(private service:BuscaMoedaService){
    this.moeda = {
       BTCBRL:{
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
    this.service.getValue("BTC-BRL").subscribe({
      next: (res) => {
  
        this.moeda = {
          BTCBRL:res.BTCBRL
        }
  
        let float;
  
        float = parseFloat(this.moeda.BTCBRL.bid);
        float = 1 / float
        float = float.toFixed(7)
        this.moeda.BTCBRL.converte = float;
        
      },
      error : (err) => console.log('not found')
    })
  }
  click() {
    let float
    const input = this.myInput.nativeElement.value
    float = input / parseFloat(this.moeda.BTCBRL.bid)
    float = float.toFixed(7)
    this.valorconvertido = float
    console.log(this.valorconvertido)
  }
}
