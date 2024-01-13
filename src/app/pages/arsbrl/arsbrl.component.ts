import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CashData } from '../../models/arsbrl';
import { BuscaMoedaService } from '../../services/busca-arsbrl.service';

@Component({
  selector: 'card-arsbrl',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arsbrl.component.html',
  styleUrl: './arsbrl.component.css'
})

export class arsbrlComponent implements OnInit {
  @ViewChild('myInput') myInput:ElementRef | any
  moeda:CashData;
  @Input()
  valorconvertido!: String;

  constructor(private service:BuscaMoedaService){
    this.moeda = {
      ARSBRL:{
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
    this.service.getValue("ARS-BRL").subscribe({
      next: (res) => {
  
        this.moeda = {
          ARSBRL:res.ARSBRL
        }
  
        let float;
  
        float = parseFloat(this.moeda.ARSBRL.bid);
        float = 1 / float
        float = float.toFixed(4)
        this.moeda.ARSBRL.converte = float;
        
      },
      error : (err) => console.log('not found')
    })
  }
  click() {
    let float
    const input = this.myInput.nativeElement.value
    float = input / parseFloat(this.moeda.ARSBRL.bid)
    float = float.toFixed(2)
    this.valorconvertido = float
    console.log(this.valorconvertido)
  }
}