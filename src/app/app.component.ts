import { Component } from '@angular/core';
import {  PokedexService } from './pokedex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   pokemon;

  constructor(service: PokedexService) {
     this.pokemon = service.getPokemon();
  }

}
