import { Component } from '@angular/core';

@Component({
  selector: 'app-bookcomp',
  templateUrl: './bookcomp.component.html',
  styleUrls: ['./bookcomp.component.css']
})
export class BookcompComponent {

  public bookList : string[] = ["The C book", "Angular Cookbook", "Head First Android Development", "Big Data For Dummies" ];

  public GetBooks()
  {
    return this.bookList;
  }
}
