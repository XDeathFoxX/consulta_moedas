import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('myInput') myInput:ElementRef | any
  moeda:CashData;
  @Input()
  valorconvertido!: String;

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
  click() {
    let float
    const input = this.myInput.nativeElement.value
    float = input / parseFloat(this.moeda.ETHBRL.bid)
    float = float.toFixed(4)
    this.valorconvertido = float
    console.log(this.valorconvertido)
  }
}
