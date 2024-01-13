import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CashData } from '../../models/gbpbrl';
import { BuscaMoedaService } from '../../services/busca-gbpbrl.service';

@Component({
  selector: 'card-gbpbrl',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gbpbrl.component.html',
  styleUrl: './gbpbrl.component.css'
})

export class gbpbrlComponent implements OnInit {
  @ViewChild('myInput') myInput:ElementRef | any
  moeda:CashData;
  @Input()
  valorconvertido!: String;

  constructor(private service:BuscaMoedaService){
    this.moeda = {
      GBPBRL:{
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
    this.service.getValue("GBP-BRL").subscribe({
      next: (res) => {
  
        this.moeda = {
          GBPBRL:res.GBPBRL
        }
  
        let float;
  
        float = parseFloat(this.moeda.GBPBRL.bid);
        float = 1 / float
        float = float.toFixed(4)
        this.moeda.GBPBRL.converte = float;
        
      },
      error : (err) => console.log('not found')
    })
  }
  click() {
    let float
    const input = this.myInput.nativeElement.value
    float = input / parseFloat(this.moeda.GBPBRL.bid)
    float = float.toFixed(2)
    this.valorconvertido = float
    console.log(this.valorconvertido)
  }
}