import { outputAst } from '@angular/compiler';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnChanges {
  @Input() currentPage = 0;
  @Input() total = 0;
  @Output() goToPageEvent = new EventEmitter<number>();

  // @Output() goToNextPageEvent = new EventEmitter<number>();
  // @Output() goToPreviousPageEvent = new EventEmitter<number>();

  pages: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    const { total, currentPage } = changes;

    if (
      (currentPage && currentPage.currentValue) ||
      (total && total.currentValue)
    ) {
      this.pages = this.getPages(this.total, this.currentPage);
    }
  }

  goToPage(page: number): void {
    this.goToPageEvent.emit(page);
  }

  // goToNext(): void {
  //   this.goToNextPageEvent.emit(this.currentPage + 1);
  // }

  // goToPrevious(): void {
  //   this.goToPreviousPageEvent.emit(this.currentPage - 1);
  // }

  getPages(total: number, currentPage: number): number[] {
    if (total < 5) {
      return Array.from({ length: total }, (_, i) => i + 1);
    } else if (currentPage < 5) {
      return [1, 2, 3, 4, 5];
    } else if (currentPage > total - 4) {
      return [total - 4, total - 3, total - 2, total - 1, total];
    } else {
      return [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
      ];
    }
  }
}
