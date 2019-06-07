import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticlesComponent } from '../articles/articles.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchTerm = new EventEmitter<string>();
  searchItem: string;

  constructor() { }

  search() {
    this.searchTerm.emit(this.searchItem);
  }

  ngOnInit() {
    
  }
}
