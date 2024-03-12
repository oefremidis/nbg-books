import { Component } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  book: Book = {
    title: 'Angular',
    year: 2024
  }

}
