import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CashData } from '../../models/btceuro';
import { BuscaMoedaService } from '../../services/busca-eurobtc.service';

@Component({
  selector: 'card-btceuro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btceuro.component.html',
  styleUrl: './btceuro.component.css'
})

export class btceurComponent implements OnInit {
  @ViewChild('myInput') myInput:ElementRef | any
  moeda:CashData;
  @Input()
  valorconvertido!: String;

  constructor(private service:BuscaMoedaService){
    this.moeda = {
      BTCEUR:{
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
    this.service.getValue("BTC-EUR").subscribe({
      next: (res) => {
  
        this.moeda = {
          BTCEUR:res.BTCEUR
        }
  
        let float;
  
        float = parseFloat(this.moeda.BTCEUR.bid);
        float = 1 / float
        float = float.toFixed(7)
        this.moeda.BTCEUR.converte = float;
        
      },
      error : (err) => console.log('not found')
    })
  }
  click() {
    let float
    const input = this.myInput.nativeElement.value
    float = input / parseFloat(this.moeda.BTCEUR.bid)
    float = float.toFixed(7)
    this.valorconvertido = float
    console.log(this.valorconvertido)
  }
}
