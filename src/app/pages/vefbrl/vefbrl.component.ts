import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CashData } from '../../models/vefbrl';
import { BuscaMoedaService } from '../../services/busca-vefbrl.service';

@Component({
  selector: 'card-vefbrl',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vefbrl.component.html',
  styleUrl: './vefbrl.component.css'
})

export class vefbrlComponent implements OnInit {
  @ViewChild('myInput') myInput:ElementRef | any
  moeda:CashData;
  @Input()
  valorconvertido!: String;

  constructor(private service:BuscaMoedaService){
    this.moeda = {
      VEFBRL:{
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
    this.service.getValue("VEF-BRL").subscribe({
      next: (res) => {
  
        this.moeda = {
          VEFBRL:res.VEFBRL
        }
  
        let float;
  
        float = parseFloat(this.moeda.VEFBRL.bid);
        float = 1 / float
        float = float.toFixed(7)
        this.moeda.VEFBRL.converte = float;
        
      },
      error : (err) => console.log('not found')
    })
  }
  click() {
    let float
    const input = this.myInput.nativeElement.value
    float = input / parseFloat(this.moeda.VEFBRL.bid)
    float = float.toFixed(2)
    this.valorconvertido = float
    console.log(this.valorconvertido)
  }
}
