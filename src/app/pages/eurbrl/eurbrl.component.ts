import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('myInput') myInput:ElementRef | any
  moeda:CashData;
  @Input()
  valorconvertido!: String;

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
  click() {
    let float
    const input = this.myInput.nativeElement.value
    float = input / parseFloat(this.moeda.EURBRL.bid)
    float = float.toFixed(2)
    this.valorconvertido = float
    console.log(this.valorconvertido)
  }
}
