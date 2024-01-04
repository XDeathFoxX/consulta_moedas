import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BuscaMoedaService } from './services/busca_usdbrl';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, CardComponent, HttpClientModule, FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'conversor_moedas';
}
