import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  boards = [
    {
      name: 'Board One', 
      color: '#00cccc', 
      id: '123',
      lists: [
      {
        title: 'list 1', 
        cards: [
          {title: 'card 1'},
          {title: 'card 2'}
        ]
      },
      {
        title: 'list 2', 
        cards: [
          {title: 'card 12'},
          {title: 'card 22'}
        ]
      }
    ]
  },
  {
    name: 'Board Two', 
    color: '#5d8a82', 
    id: '456',
    lists: [
      {
        title: 'list 12', 
        cards: [
          {title: 'card 123'},
          {title: 'card 223'}
        ]
      },
      {
        title: 'list 22', 
        cards: [
          {title: 'card 1223'},
          {title: 'card 2223'}
        ]
      }
    ]
  }
];
  
  constructor() { }

  getBoards() {
    return this.boards.map((b) => ({name: b.name, color: b.color, id: b.id}));
  }

  getBoardDetails(id: string) {
    return this.boards.filter((b) => b.id === id)[0];
  }
}
