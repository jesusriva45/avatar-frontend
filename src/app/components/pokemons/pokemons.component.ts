import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { offset } from '@popperjs/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonSpecies } from 'src/app/models/pokemon-species';
import { ModalPokemonsDetailComponent } from 'src/app/shared/components/modal-pokemons-detail/modal-pokemons-detail.component';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  constructor(private _pokemonService: PokemonService, public modalDialog: MatDialog) { }

  arrayPokemon: Pokemon[] = []
  pokemon: Pokemon = new Pokemon
  pokemonSpecies: PokemonSpecies = new PokemonSpecies;

  totalPagination: Number[] = []
  offSetInit: number = 0
  limitInit: number = 10




  ngOnInit(): void {
    this.getPokemons(this.offSetInit, this.limitInit)
    this.paginationPo()
  }

  getPokemons(offset: number, limit: number) {

    let pokemonPromise = new Promise((resolve, reject) => {

      this._pokemonService
        .getPokemones(offset, limit)
        .subscribe((data) => {
          this.pokemonSpecies = data
          resolve(data)
        });
    })

    return pokemonPromise

  }

  paginationPo() {

    this.getPokemons(0, this.limitInit).then(() => {

      let nroPaginas = (this.pokemonSpecies.total.valueOf() / 10)

      for (let index = 0; index <= nroPaginas; index++) {
        this.totalPagination.push(index)
      }
      console.log(this.totalPagination)
    })

  }

  getPokemonsList(i: number, direccionPage: number) {
    //next: 1
    //previous: 0 
    this.offSetInit = i
    if (direccionPage === 0) {
      this.offSetInit = this.offSetInit - this.limitInit
      console.log(this.offSetInit)
      this.getPokemons(this.offSetInit, this.limitInit)
    } else if (direccionPage === 1) {
      this.offSetInit = this.offSetInit + this.limitInit
      console.log(this.offSetInit)
      this.getPokemons(this.offSetInit, this.limitInit)
    } else {
      console.log(i)
      this.getPokemons(i, this.limitInit)
    }
  }


  detailPokemon(pokemon: Pokemon) {

    this.modalDialog.open(ModalPokemonsDetailComponent, this.configDialog(pokemon));

    /* dialogRef.afterClosed().subscribe(result => {
       console.log(`Dialog result: ${result}`);
     });*/

  }



  configDialog(pokemon: Pokemon): MatDialogConfig {
    let dialogConfig: MatDialogConfig = {
      data: { pokemon: pokemon },
      height: 'auto',
      width: 'auto',

    }
    return dialogConfig
  }


}
