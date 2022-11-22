import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterApiResponse } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacters(page: number): Observable<CharacterApiResponse> {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

    return this.http.get<CharacterApiResponse>(url);
  }
}
