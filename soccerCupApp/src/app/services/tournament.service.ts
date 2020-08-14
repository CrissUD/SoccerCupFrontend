import { Injectable } from '@angular/core';
import { Tournament } from '../models/Tournament';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  urlRoot: string = 'http://localhost:3000/'; 

  constructor(private http: HttpClient) { }

  postTournament(tournament: Tournament){
    return this.http.post(`${this.urlRoot}tournament/`, tournament).pipe(
      map((res: any) =>{
        tournament.id_tournament = res.split('/')[res.split('/').length - 1];
        return tournament;
      })
    );
  }
}
