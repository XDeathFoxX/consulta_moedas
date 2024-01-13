import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CashData } from '../../models/cadbrl';
import { BuscaMoedaService } from '../../services/busca-cadbrl.service';

@Component({
  selector: 'card-cadbrl',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cadbrl.component.html',
  styleUrl: './cadbrl.component.css'
})

export class cadbrlComponent implements OnInit {
  @ViewChild('myInput') myInput:ElementRef | any
  moeda:CashData;
  @Input()
  valorconvertido!: String;

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
  click() {
    let float
    const input = this.myInput.nativeElement.value
    float = input / parseFloat(this.moeda.CADBRL.bid)
    float = float.toFixed(2)
    this.valorconvertido = float
    console.log(this.valorconvertido)
  }
}
