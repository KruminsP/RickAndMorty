import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-boilerplate';
  page = 1;
  items = [...Array(180).keys()].map((item) => `item ${item + 1}`);
  itemsToDisplay: string[] = [];
  perPage = 10;
  total = Math.ceil(this.items.length / this.perPage);

  ngOnInit(): void {
    this.itemsToDisplay = this.paginate(this.page, this.perPage);
  }

  goToPage(page: number): void {
    this.page = page;
    this.itemsToDisplay = this.paginate(this.page, this.perPage);
  }

  paginate(page: number, perPage: number): string[] {
    return [...this.items.slice((page - 1) * perPage).slice(0, perPage)];
  }
  //loading = false;
}
