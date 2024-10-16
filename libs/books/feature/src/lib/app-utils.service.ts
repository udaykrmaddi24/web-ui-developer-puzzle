import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { addToReadingList, removeFromReadingList } from '@tmo/books/data-access';

@Injectable({
  providedIn: 'root',
})
export class AppUtilsService {
  messageMap = new Map([
    ['Added', 'Book Added to Reading List'],
    ['Removed', 'Book removed from reading list'],
  ]);
  constructor(private snackBar: MatSnackBar, private readonly store: Store) {}

  openSnackBar(message: string, item) {
    console.log(message," ", item);
    const messageText = this.messageMap.get(message);
    const snackBarRef = this.snackBar.open(messageText, 'Undo', {
      duration: 2000,
    });
    snackBarRef.onAction().subscribe(() => {
      if (message === 'Added') {
        this.store.dispatch(removeFromReadingList({ bookId: item.id, ...item }));
      } else if (message === 'Removed') {
        this.store.dispatch(addToReadingList({ id: item.bookId, ...item }));
      }
    });
  }
}
