import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, delay, Subject, takeUntil } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters: Character[] = [];
  total = 0;
  currentPage = 1;
  ngDestroyed$ = new Subject<void>();
  loading$ = new BehaviorSubject<boolean>(false);

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getCharacters(this.currentPage);
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next();
    this.ngDestroyed$.complete();
  }

  getCharacters(page: number): void {
    this.loading$.next(true);
    this.characters = [];
    this.currentPage = page;
    this.characterService
      .getCharacters(page)
      .pipe(delay(1000), takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        console.log(response);
        this.characters = response.results;
        this.total = response.info.pages;
        this.loading$.next(false);
      });
  }
}
