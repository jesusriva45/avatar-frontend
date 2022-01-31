import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-modal-pokemons-detail',
  templateUrl: './modal-pokemons-detail.component.html',
  styleUrls: ['./modal-pokemons-detail.component.scss']
})
export class ModalPokemonsDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { pokemon: Pokemon }) { }

  ngOnInit(): void {

  }

}
