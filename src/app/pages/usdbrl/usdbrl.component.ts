import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CashData } from '../../models/usdbrl';
import { BuscaMoedaService } from '../../services/busca_usdbrl';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usdbrl.component.html',
  styleUrl: './usdbrl.component.css'
})
export class usdbrlComponent implements OnInit {
  @ViewChild('myInput') myInput:ElementRef | any
  moeda:CashData;
  @Input()
  valorconvertido!: String;

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
    this.service.getValue("USD-BRL").subscribe({
      next: (res) => {
  
        this.moeda = {
          USDBRL:res.USDBRL
        }
  
        let float;
  
        float = parseFloat(this.moeda.USDBRL.bid);
        float = 1 / float
        float = float.toFixed(4)
        this.moeda.USDBRL.converte = float;
        
      },
      error : (err) => console.log('not found')
    })
  }
  click() {
    let float
    const input = this.myInput.nativeElement.value
    float = input / parseFloat(this.moeda.USDBRL.bid)
    float = float.toFixed(2)
    this.valorconvertido = float
    console.log(this.valorconvertido)
  }
}
