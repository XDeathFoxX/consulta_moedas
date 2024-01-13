import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CashData } from '../../models/usdbrlt';
import { BuscaMoedaService } from '../../services/busca-usdbrlt.service';

@Component({
  selector: 'card-usdbrlt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usdbrlt.component.html',
  styleUrl: './usdbrlt.component.css'
})

export class usdbrltComponent implements OnInit {
  @ViewChild('myInput') myInput:ElementRef | any
  moeda:CashData;
  @Input()
  valorconvertido!: String;

  constructor(private service:BuscaMoedaService){
    this.moeda = {
      USDBRLT:{
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
    this.service.getValue("USD-BRLT").subscribe({
      next: (res) => {
  
        this.moeda = {
          USDBRLT:res.USDBRLT
        }
  
        let float;
  
        float = parseFloat(this.moeda.USDBRLT.bid);
        float = 1 / float
        float = float.toFixed(4)
        this.moeda.USDBRLT.converte = float;
        
      },
      error : (err) => console.log('not found')
    })
  }
  click() {
    let float
    const input = this.myInput.nativeElement.value
    float = input / parseFloat(this.moeda.USDBRLT.bid)
    float = float.toFixed(2)
    this.valorconvertido = float
    console.log(this.valorconvertido)
  }
}
