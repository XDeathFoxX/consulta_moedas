import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CashData } from '../../models/btcusd';
import { BuscaMoedaService } from '../../services/busca-btcusd.service';

@Component({
  selector: 'card-btcusd',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btcusd.component.html',
  styleUrl: './btcusd.component.css'
})

export class btcusdComponent implements OnInit {
  @ViewChild('myInput') myInput:ElementRef | any
  moeda:CashData;
  @Input()
  valorconvertido!: String;

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
    this.service.getValue("BTC-USD").subscribe({
      next: (res) => {
  
        this.moeda = {
          BTCUSD:res.BTCUSD
        }
  
        let float;
  
        float = parseFloat(this.moeda.BTCUSD.bid);
        float = 1 / float
        float = float.toFixed(7)
        this.moeda.BTCUSD.converte = float;
        
      },
      error : (err) => console.log('not found')
    })
  }
  click() {
    let float
    const input = this.myInput.nativeElement.value
    float = input / parseFloat(this.moeda.BTCUSD.bid)
    float = float.toFixed(7)
    this.valorconvertido = float
    console.log(this.valorconvertido)
  }
}
