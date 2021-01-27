import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {

  boards = [
    { name: 'Board One', color: '#00cccc' },
    { name: 'Board Two', color: '#5d8a82'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
