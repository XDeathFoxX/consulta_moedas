import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CashData } from '../../models/ltcbrl';
import { BuscaMoedaService } from '../../services/busca-ltcbrl.service';

@Component({
  selector: 'card-ltcbrl',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ltcbrl.component.html',
  styleUrl: './ltcbrl.component.css'
})

export class ltcbrlComponent implements OnInit {
  @ViewChild('myInput') myInput:ElementRef | any
  moeda:CashData;
  @Input()
  valorconvertido!: String;

  constructor(private service:BuscaMoedaService){
    this.moeda = {
      LTCBRL:{
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
    this.service.getValue("LTC-BRL").subscribe({
      next: (res) => {
  
        this.moeda = {
          LTCBRL:res.LTCBRL
        }
  
        let float;
  
        float = parseFloat(this.moeda.LTCBRL.bid);
        float = 1 / float
        float = float.toFixed(4)
        this.moeda.LTCBRL.converte = float;
        
      },
      error : (err) => console.log('not found')
    })
  }
  click() {
    let float
    const input = this.myInput.nativeElement.value
    float = input / parseFloat(this.moeda.LTCBRL.bid)
    float = float.toFixed(4)
    this.valorconvertido = float
    console.log(this.valorconvertido)
  }
}