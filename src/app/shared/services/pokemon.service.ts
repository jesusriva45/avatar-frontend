import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import {  Pokemon } from 'src/app/models/pokemon';
import { PokemonSpecies } from 'src/app/models/pokemon-species';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private urlEndPoint: string = environment.ServerLocal + "pokemon-species"

  private httpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
  });

  private urlEndPointPrueba: String = "https://pokeapi.co/api/v2/pokemon-species/1/"

  constructor(private http: HttpClient,
    private router: Router) { }



  getPokemones(offSet: number, limit: number): Observable<PokemonSpecies> {

    return this.http.get<PokemonSpecies>(`${this.urlEndPoint}/${offSet}/${limit}`, { headers: this.httpHeaders }).pipe(catchError((e) => {
      return throwError(e)
    }))
  }

}
