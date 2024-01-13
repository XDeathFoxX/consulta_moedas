import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CashData } from '../../models/dogebrl';
import { valor } from '../../models/valor'
import { BuscaMoedaService } from '../../services/busca-dogebrl.service';

@Component({
  selector: 'card-dogebrl',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dogebrl.component.html',
  styleUrl: './dogebrl.component.css'
})

export class dogebrlComponent implements OnInit , AfterViewInit {
  @ViewChild('myInput') myInput:ElementRef | any
  moeda:CashData;
  @Input()
  valorconvertido!: String;


  constructor(private service:BuscaMoedaService){
    this.moeda = {
      DOGEBRL:{
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
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.service.getValue("DOGE-BRL").subscribe({
      next: (res) => {
  
        this.moeda = {
          DOGEBRL:res.DOGEBRL
        }
  
        let float;
  
        float = parseFloat(this.moeda.DOGEBRL.bid);
        float = 1 / float
        float = float.toFixed(4)
        this.moeda.DOGEBRL.converte = float;
      },
      error : (err) => console.log('not found')
    })
  }

  click() {
    let float
    const input = this.myInput.nativeElement.value
    float = input / parseFloat(this.moeda.DOGEBRL.bid)
    float = float.toFixed(4)
    this.valorconvertido = float
    console.log(this.valorconvertido)
  }
}
