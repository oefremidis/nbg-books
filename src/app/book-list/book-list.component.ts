import { Component } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { Book } from '../models/book';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookComponent, JsonPipe],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  books: Book[] = [
      {
        title: 'AAA',
        year: 2020
      },
      {
        title: 'BBB',
        year: 2024
      }
    ];
}


// declare type in-place
// books: {
//   title: string,
//   year: number
// }[] = [
//     {
//       title: 'AAA',
//       year: 2020
//     },
//     {
//       title: 'BBB',
//       year: 2024
//     }
//   ];